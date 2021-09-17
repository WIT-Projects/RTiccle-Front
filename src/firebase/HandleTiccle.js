import { uploadBigTiccle, uploadSmallTiccle } from "./Firestore";
import { uploadImageToStorage } from "./Storage";

/**
 * 
 * @param {*} bigTiccle 
 * {
        lastModifiedTime: TimeStamp,
        group: integer, // BOOK(0), BLOG(1), NEWS(2), WEB(3), SNS(4), ETC(5)
        title: String,
        link: String, //
        tagList: Array<String>,
    }
 * @param {*} imgName main image's name [for now, Date() + '.jpg'] 
 * @param {*} imgURL local image url (if OS is android, replace 'file://' from url!)
 */
async function handleBigTiccle(
    bigTiccle, imgName, imgURL
) {
    // upload image first
    uploadImageToStorage(imgName, imgURL)
    .then((downloadURL) => {
        // TODO handle error
        var newBigTiccle = {...bigTiccle, mainImage: downloadURL} // add image url
        uploadBigTiccle(newBigTiccle);
    })
}

export {
    handleBigTiccle,
}