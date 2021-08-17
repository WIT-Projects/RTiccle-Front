import React, { useEffect, useState, useRef } from "react";
import { TextInput, SafeAreaView, View, StyleSheet, Text, Dimensions, ScrollView, Image, TouchableOpacity, Alert, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Dialog from "react-native-dialog";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabBarHeight = 51;
const ContainerWidth = 350;

export default function SubTiccle() {
    const navigation = useNavigation();

    const [title, onChangeTitle] = useState("");
    const [link, onChangeLink] = useState("");
    const [content, onChangeContent] = useState("");
    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleDelete = () => {
        setVisible(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Navigator */}
                <View style={styles.titleBar}>
                    <View style={styles.titleBarContainer}>
                        <Image onTouchEnd={() => { navigation.goBack() }} source={require('../../../../assets/images/icon/icon_back.png')} style={styles.iconLeft} />
                        <View onTouchEnd={() => { navigation.navigate('Main') }}>
                            <Text style={styles.titleText}>R-Ticcle</Text>
                        </View>
                        <View onTouchEnd={() => { }}>
                            <Text style={styles.iconRight}>저장</Text>
                        </View>
                    </View>
                </View>

                {/* TextInput */}
                <TextInput style={styles.textInput} onChangeText={onChangeTitle} placeholder=" 회차/소제목(선택)" />
                <TextInput style={styles.textInput} onChangeText={onChangeLink} placeholder=" 원본글 링크 or 파일(선택)" />

                {/* button */}
                <View style={styles.addButton}>
                    <Text style={styles.addButtonText}>이미지 추가 +</Text>
                </View>
                {/* TextArea */}
                <TextInput multiline={true} numberOfLines={10} style={styles.textAreaInput} onChangeText={onChangeContent} placeholder="내용을 입력하세요" />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: windowWidth,
        height: "100%",
    },
    titleBar: {
        backgroundColor: '#ffffff',
        height: tabBarHeight,
        width: '100%',
        alignItems: 'center',
        marginTop: 4,

        //bottom-Shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        elevation: 4,
    },
    titleBarContainer: {
        width: ContainerWidth,
        height: tabBarHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleText: {
        color: '#6BDCC2',
        fontSize: 23,
        fontFamily: 'NotoSansKR-Bold',
        alignItems: 'center',
        lineHeight: 30,
    },
    iconLeft: {
        resizeMode: "contain",
        marginRight: 20,
    },

    iconRight: {
        color: '#6BDCC2',
        fontSize: 17,
        fontFamily: 'NotoSansKR-Bold',
        alignItems: 'center',
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        marginTop: 10,
    },
    labelText: {
        fontFamily: 'NotoSansKR-Bold',
        fontSize: 14,
        color: '#D6D6D6', //
        borderWidth: 1.5,
        borderColor: '#D6D6D6', //
        backgroundColor: '#FFFFFF', //
        borderRadius: 8,
        padding: 5,
        lineHeight: 20,
        paddingLeft: 9,
    },
    labelTextIsPress: {
        fontFamily: 'NotoSansKR-Bold',
        fontSize: 14,
        color: '#FFFFFF',
        borderWidth: 1.5,
        borderColor: '#6BDCC2',
        backgroundColor: '#6BDCC2',
        borderRadius: 8,
        padding: 5,
        lineHeight: 20,
        paddingLeft: 9,
    },
    textInput: {
        marginHorizontal: 25,
        borderBottomColor: '#CECECE',
        borderBottomWidth: 1,
        fontSize: 16,
        marginTop: 15,
    },
    textAreaInput: {
        height: 370,
        marginHorizontal: 25,
        fontSize: 16,
        backgroundColor: "#F6F6F6",
        textAlignVertical: 'top',
        padding: 20,
        marginTop: 20,
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: '#6BDCC2',
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 25,
        marginTop: 20,
    },
    addButtonText: {
        color: '#6B6B6B',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
