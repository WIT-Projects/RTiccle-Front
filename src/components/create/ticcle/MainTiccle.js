import React, { useEffect, useState, useRef } from "react";
import { TextInput, SafeAreaView, View, StyleSheet, Text, Dimensions, ScrollView, Image, TouchableOpacity, Alert, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AutoTag from './autotag/AutoTag';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabBarHeight = 51;
const imgContainerHeight = 220;
const ContainerWidth = 350;

export default function MainTiccle() {
    const navigation = useNavigation();
    const label = ["책", "블로그", "뉴스기사", "웹 연재물", "SNS", "기타"]

    const [title, onChangeTitle] = useState("");
    const [link, onChangeLink] = useState("");

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
                {/* label */}
                <View style={styles.labelContainer}>
                    {label.map((label) => { return (<Text key={label} style={styles.labelText} >{label}</Text>) })}
                </View>

                {/* TextInput */}
                <TextInput style={styles.textInput} onChangeText={onChangeTitle} placeholder=" 제목" />
                <TextInput style={styles.textInput} onChangeText={onChangeLink} placeholder=" 원본글 링크 or 파일(선택)" />
                <AutoTag />
                {/* button */}
                <View style={styles.addButton}>
                    <Text style={styles.addButtonText} onTouchEnd={() => { navigation.navigate('SubTiccle') }}>내용 추가 +</Text>
                </View>
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
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: '#6BDCC2',
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 25,
        marginTop: 15,
    },
    addButtonText: {
        color: '#6B6B6B',
        fontSize: 16,
        fontWeight: 'bold',
    },
});