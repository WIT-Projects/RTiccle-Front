import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

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
function uploadBigTiccleToFirestore(bigTiccle){
    userTiccleDoc.collection("BigTiccle")
    .add(bigTiccle)
    .then(() => {
        console.log('BigTiccle added!');
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
function uploadSmallTiccleToFirestore(docRef, smallTiccle){
    docRef.collection("SmallTiccle")
    .add(smallTiccle)
    .then(() => {
        console.log('SmallTiccle added!');
    });
}

export {
    uploadBigTiccleToFirestore,
    uploadSmallTiccleToFirestore,
}