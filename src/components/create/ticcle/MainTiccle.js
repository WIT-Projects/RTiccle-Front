import React, { useEffect, useState, useRef, useCallback } from "react";
import { TextInput, SafeAreaView, View, StyleSheet, Text, Dimensions, ScrollView, Image, TouchableOpacity, Alert, Button, FlatList, Modal, ImageBackground, Pressable, ToastAndroid} from "react-native";
import { useNavigation } from '@react-navigation/native';
import AutoTag from './autotag/AutoTag';
import SubTiccleList from './SubTiccleList';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-easy-toast';

// import Animated from "react-native-reanimated";

import { uploadBigTiccle } from "../../../firebase/HandleTiccle";
import firestore from '@react-native-firebase/firestore';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabBarHeight = 55;
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

    let tag = [];

    const getTag = (x) => {
        tag.splice(0);
        for(i in x){
            tag.push(x[i].tagName);
            console.log("태그 확인: "+ tag[i]);
        }
    }

    const toastRef = useRef();

    const showCopyToast = useCallback((str) => {
        toastRef.current.show(str);
    }, []);

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
            showCopyToast("그룹을 선택해주세요.");
            return
        }

        if(link != ""){
            const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            if(urlRegex.test(link) == false){
                console.log("URL false");
                showCopyToast("링크 형식이 올바르지 않습니다.");
                return
            }
            console.log("URL true");
        }

        if(title == ""){
            showCopyToast("제목을 입력해주세요.");
            return
        }

        //BigTiccle
        let bigTiccle = {
            lastModifiedTime: firestore.Timestamp.fromDate(new Date()),
            group: groupNum, // BOOK(0), BLOG(1), NEWS(2), WEB(3), SNS(4), ETC(5)
            title: title,
            link: link, //
            tagList: tag,
        }

        //이미지 설정
        let imageUrl = image.replace('file://', ''); // android

        //저장
        uploadBigTiccle(bigTiccle, Date() + ".jpg", imageUrl)

        // TODO Change View
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Navigator */}
                <View style={styles.titleBar}>
                    <View style={styles.titleBarContainer}>
                        <TouchableOpacity style={styles.iconLeftContainer}>
                            <Image onTouchEnd={() => { navigateTo.goBack() }} source={require('../../../../assets/images/icon/icon_back.png')} style={styles.iconLeft} />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.titleText}>R-Ticcle</Text>
                        </View>
                        <TouchableOpacity style={styles.iconRightContainer}>
                            <Text style={styles.iconRight}>저장</Text>
                        </TouchableOpacity>
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
                <TouchableOpacity onPress={() => { setModalVisible(true) }} style={{marginLeft: 20, width: 150, height: 150, }}>
                    <ImageBackground source={{ uri: image }} style={styles.mainImage} imageStyle={{ borderRadius: 15 }}>
                        <Icon name="camera" size={35} color="#fff" style={styles.mainImageIcon}/>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addButton} onPress={() => { navigateTo.navigate('SubTiccle') }}>
                    <Text style={styles.addButtonText}>내용 추가 +</Text>
                </TouchableOpacity>

                {/* SubTiccle list */}
                <View style={styles.subTiccleContainer}>
                    {data.map((item) => { return (<SubTiccleList key={item.id} date={item.date} title={item.title} imgUrl={item.imgUrl} content={item.content}/>) })}
                </View>
            </ScrollView>

            {/* image modal */}
            <Modal animationType="fade" 
            transparent={true} 
            visible={modalVisible} 
            onRequestClose={() => { setModalVisible(!modalVisible);}}
            >
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.modalTextContainer} onPress={takePhotoFromCamera} >
                            <Text style={styles.modalText}>사진 촬영</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.modalTextContainer} onPress={choosePhotoFromLibrary} >
                            <Text style={styles.modalText}>앨범에서 사진 선택</Text>
                        </TouchableOpacity>
                        
                    </View>
            </Modal>

            <Toast ref={toastRef}
             positionValue={windowHeight * 0.55}
            fadeInDuration={200}
            fadeOutDuration={1000}
            style={{backgroundColor:'rgba(33, 87, 243, 0.5)'}}
    />
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
        backgroundColor : '#ffffff',
        height : tabBarHeight,
        width : '100%',
        alignItems : 'center',
    
        //bottom-Shadow
    
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
    shadowOpacity: 0.2,
    elevation: 6,
    },
    titleBarContainer: {
        width: '100%',
        height: tabBarHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal : 20,
    },
    titleText: {
        color: '#6BDCC2',
        fontSize : 24,
        fontFamily : 'NotoSansKR-Bold',
        alignItems : 'center',
        lineHeight : 32,
    },
    iconLeftContainer: {
        position : 'absolute',
        top : 17,
        left : 20,
    },
    iconLeft: {
        resizeMode: "contain",
        marginRight: 20,
    },

    iconRightContainer:{
        position : 'absolute',
        right : 20,
    },
    iconRight: {
        color: '#6BDCC2',
        fontSize: 17,
        fontFamily: 'NotoSansKR-Bold',
        alignItems: 'center',
    },
    labelContainer: {
        width : '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        marginTop: 20,
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
        marginHorizontal: 20,
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
        marginHorizontal: 20,
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
    
    subTiccleContainer :{
        marginTop : 25,
    },

     // Modal
    modalContainer:{
        flex : 1,
    },
    modalView: {
        position: 'absolute',
        top: '45%',
        left: '5%',
        textAlign: 'center',
        width: '90%',
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 25,
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
    modalTextContainer: {
        width : '100%',
    },
    modalText: {
        marginVertical: 10,
    },
});

