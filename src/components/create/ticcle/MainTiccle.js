import React, { useEffect, useState, useRef } from "react";
import { TextInput, SafeAreaView, View, StyleSheet, Text, Dimensions, ScrollView, Image, TouchableOpacity, Alert, Button, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AutoTag from './autotag/AutoTag';
import SubTiccleList from './SubTiccleList';
import ScrollTag from './ScrollTag';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabBarHeight = 51;
const imgContainerHeight = 220;
const ContainerWidth = 350;

export default function MainTiccle() {
    const navigateTo = useNavigation();
    const label = ["책", "블로그", "뉴스기사", "웹 연재물", "SNS", "기타"]

    const [title, onChangeTitle] = useState("");
    const [link, onChangeLink] = useState("");

    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);
    const [button4, setButton4] = useState(false);
    const [button5, setButton5] = useState(false);
    const [button6, setButton6] = useState(false);

    const data = [
        {
            id: 1,
            date: "2021.06.07",
            title: "UIUX 디자인이란 무엇일까?",
            imgUrl: "https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/CyKAu5r6yUDSnRAy28UDlDEpCDs.png",
            content: "휴대폰, 컴퓨터, 내비게이션 등 디지털 기기를 작동시키는 명령어나 기법을 포함하는 사용자 환경을 뜻한다. 이용자들이 IT기기를 구동하기 위해서 접촉하는 매개체로 컴퓨터asdfasdfasfd"
        },
        {
            id: 2,
            date: "2021.06.07",
            title: "UIUX 디자인이란 무엇일까?",
            imgUrl: "https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/CyKAu5r6yUDSnRAy28UDlDEpCDs.png",
            content: "휴대폰, 컴퓨터, 내비게이션 등 디지털 기기를 작동시키는 명령어나 기법을 포함하는 사용자 환경을 뜻한다. 이용자들이 IT기기를 구동하기 위해서 접촉하는 매개체로 컴퓨터asdfasdfasfd"
        },
        {
            id: 3,
            date: "2021.06.07",
            title: "UIUX 디자인이란 무엇일까?",
            imgUrl: "https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/CyKAu5r6yUDSnRAy28UDlDEpCDs.png",
            content: "휴대폰, 컴퓨터, 내비게이션 등 디지털 기기를 작동시키는 명령어나 기법을 포함하는 사용자 환경을 뜻한다. 이용자들이 IT기기를 구동하기 위해서 접촉하는 매개체로 컴퓨터asdfasdfasfd"
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Navigator */}
                <View style={styles.titleBar}>
                    <View style={styles.titleBarContainer}>
                        <Image onTouchEnd={() => { navigateTo.goBack() }} source={require('../../../../assets/images/icon/icon_back.png')} style={styles.iconLeft} />
                        <View onTouchEnd={() => { navigateTo.navigate('Main') }}>
                            <Text style={styles.titleText}>R-Ticcle</Text>
                        </View>
                        <View onTouchEnd={() => { }}>
                            <Text style={styles.iconRight}>저장</Text>
                        </View>
                    </View>
                </View>
                {/* label */}
                <View style={styles.labelContainer}>
                    <Text style={button1 ? styles.pressedLabelText : styles.labelText} onTouchEnd={() => { setButton1(!button1) }}>{label[0]}</Text>
                    <Text style={button2 ? styles.pressedLabelText : styles.labelText} onTouchEnd={() => { setButton2(!button2) }}>{label[1]}</Text>
                    <Text style={button3 ? styles.pressedLabelText : styles.labelText} onTouchEnd={() => { setButton3(!button3) }}>{label[2]}</Text>
                    <Text style={button4 ? styles.pressedLabelText : styles.labelText} onTouchEnd={() => { setButton4(!button4) }}>{label[3]}</Text>
                    <Text style={button5 ? styles.pressedLabelText : styles.labelText} onTouchEnd={() => { setButton5(!button5) }}>{label[4]}</Text>
                    <Text style={button6 ? styles.pressedLabelText : styles.labelText} onTouchEnd={() => { setButton6(!button6) }}>{label[5]}</Text>
                </View>

                {/* TextInput */}
                <TextInput style={styles.textInput} onChangeText={onChangeTitle} placeholder=" 제목" />
                <TextInput style={styles.textInput} onChangeText={onChangeLink} placeholder=" 원본글 링크 or 파일(선택)" />
                <AutoTag />

                {/* button */}
                <View style={styles.addButton}>
                    <Text style={styles.addButtonText} onTouchEnd={() => { navigateTo.navigate('SubTiccle') }}>내용 추가 +</Text>
                </View>

                {/* SubTiccle list */}
                <View>
                    {data.map((item) => { return (<SubTiccleList key={item.id} date={item.date} title={item.title} imgUrl={item.imgUrl} content={item.content}/>) })}
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
    pressedLabelText: {
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
        marginTop: 10,
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
