import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";
import {ToastAndroid} from 'react-native'

const user = auth().currentUser;
const userTiccleDoc = firestore().collection('Ticcle').doc(user.uid);

/**
 * @param {*} bigTiccle 
 *  {
        lastModifiedTime: TimeStamp,
        group: integer, // BOOK(0), BLOG(1), NEWS(2), WEB(3), SNS(4), ETC(5)
        title: String,
        link: String, //
        tagList: Array<String>,
        mainImage: String //"downloadURL"
    }
 */
function uploadBigTiccle(bigTiccle){
    userTiccleDoc.collection("BigTiccle")
    .add(bigTiccle)
    .then(() => {
        console.log('BigTiccle added!');
        ToastAndroid.show("BigTiccle added!", ToastAndroid.SHORT)
    });
}

/**
 * 
 * @param {*} docRef reference of parent document (BigTiccle) 
 * @param {*} smallTiccle
 * {
        title: String,
        link: String, // original content link
        imageList: Map<String, String>, // limit: 2 // { "ref": "message", }
        content: String
    }
 */
function uploadSmallTiccle(docRef, smallTiccle){
    docRef.collection("SmallTiccle")
    .add(smallTiccle)
    .then(() => {
        console.log('SmallTiccle added!');
        ToastAndroid.show("SmallTiccle added!", ToastAndroid.SHORT)
    });
}

export {
    uploadBigTiccle,
    uploadSmallTiccle,
}