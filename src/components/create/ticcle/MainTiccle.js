import React, { useEffect, useState, useRef } from "react";
import { TextInput, SafeAreaView, View, StyleSheet, Text, Dimensions, ScrollView, Image, TouchableOpacity, Alert, Button, FlatList, Modal, ImageBackground, Pressable, ToastAndroid} from "react-native";
import { useNavigation } from '@react-navigation/native';
import AutoTag from './autotag/AutoTag';
import SubTiccleList from './SubTiccleList';
import ScrollTag from './ScrollTag';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Animated from "react-native-reanimated";

import { uploadImageToStorage } from '../../../firebase/Storage'
import { handleBigTiccle } from "../../../firebase/HandleTiccle"; // use this!
import { range } from "d3-array";


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

    const [buttons, setButton] = useState([false,false,false,false,false,false]);

    const onChange = id => {
        setButton((checks) => checks.map((c, i) => (i === id ? true : false)))
    }

    let tag = []

    const getTag = (x) => {
        tag.splice(0);
        for(i in x){
            tag.push(x[i].tagName);
            console.log("태그 확인: "+ tag[i]);
        }
    }

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
    const [image, setImage] = useState('https://images.unsplash.com/photo-1576515652031-fc429bab6503?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
    const[modalVisible, setModalVisible] = useState(false);
    
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            cropperToolbarWidgetColor: '#479583',
            cropperToolbarTitle: '',
            cropperActiveWidgetColor: '#479583',
            cropping: true,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            setImage(image.path);
            setModalVisible(false);
        }).catch(error => {
            if (error.code === 'E_PICKER_CANCELLED')
            return false;
        });
    }
    
    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            cropperToolbarWidgetColor: '#479583',
            cropperToolbarTitle: '',
            cropperActiveWidgetColor: '#479583',
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            setModalVisible(false);
            setImage(image.path);
        }).catch(error => {
            if (error.code === 'E_PICKER_CANCELLED')
                return false;
        });
    }

    const getGroup = () => {
        let num = -1;
        buttons.map((c, i) =>{
            if(c == true){
                num = i;
            }
        })
        return num;
    }

    const saveBigTiccle = () => {
        // TODO check input
        var groupNum = getGroup();
        console.log("그룹 확인:"+groupNum);
        if(groupNum == -1){
            return
        }

        const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if(urlRegex.test(link) == false){
            console.log("URL false");
            return
        }
        console.log("URL true");

        //BigTiccle
        let bigTiccle = {
            lastModifiedTime: new Date().getTime(),
            group: groupNum, // BOOK(0), BLOG(1), NEWS(2), WEB(3), SNS(4), ETC(5)
            title: title,
            link: link, //
            tagList: tag,
        }

        //이미지 설정
        let imageUrl = image.replace('file://', ''); // android

        //저장
        handleBigTiccle(bigTiccle, Date() + ".jpg", imageUrl)

        // 이미지가 null일때도 적용이 되는지?

        // Uplaod image to storage (image name: Date() for temporary)
        // uploadImageToStorage(Date() + ".jpg", imageUrl)
        // .then((res) => {
        //     console.log(res);
        //     ToastAndroid.show("이미지 저장 완료", ToastAndroid.SHORT);
        // })

        // TODO Change View
        // 현재 저장하는 큰 티끌 id로 데이터 불러오는 API필요함
    }

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
                            <Text style={styles.iconRight} onPress={saveBigTiccle}>저장</Text>
                        </View>
                    </View>
                </View>
                {/* label */}
                <View style={styles.labelContainer}>
                    {label.map((item, index) => { return (<Text key={item} style={ buttons[index] ? styles.pressedLabelText : styles.labelText} onTouchEnd={() => { onChange(index) }}>{item}</Text>) })}
                </View>

                {/* TextInput */}
                <TextInput style={styles.textInput} onChangeText={onChangeTitle} placeholder=" 제목" />
                <TextInput style={styles.textInput} onChangeText={onChangeLink} placeholder=" 원본글 링크 or 파일(선택)" />
                <AutoTag getTag={getTag}/>

                {/* main image */}
                <TouchableOpacity onPress={() => { setModalVisible(true) }} style={{marginLeft: 30, width: 150, height: 150, }}>
                    <ImageBackground source={{ uri: image }} style={styles.mainImage} imageStyle={{ borderRadius: 15 }}>
                        <Icon name="camera" size={35} color="#fff" style={styles.mainImageIcon}/>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={styles.addButton}>
                    <Text style={styles.addButtonText} onTouchEnd={() => { navigateTo.navigate('SubTiccle') }}>내용 추가 +</Text>
                </View>

                {/* SubTiccle list */}
                <View>
                    {data.map((item) => { return (<SubTiccleList key={item.id} date={item.date} title={item.title} imgUrl={item.imgUrl} content={item.content}/>) })}
                </View>
            </ScrollView>

            {/* image modal */}
            <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible);}}>
                <View>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText} onPress={takePhotoFromCamera} >사진 촬영</Text>
                        <Text style={styles.modalText} onPress={choosePhotoFromLibrary}>앨범에서 사진 선택</Text>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: windowWidth,
        height: "100%",
        position: 'relative',
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
        color: '#D6D6D6',
        borderWidth: 1.5,
        borderColor: '#D6D6D6',
        backgroundColor: '#FFFFFF',
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
    mainImage: {
        height: 150,
        width: 150,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainImageIcon: {
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView: {
        position: 'absolute',
        top: '50%',
        left: '5%',
        textAlign: 'center',
        marginTop: 250,
        width: '90%',
        backgroundColor: "white",
        borderRadius: 10,
        padding: 30,
        justifyContent: 'center',
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginVertical: 5,
        textAlign: "center"
    },
});
