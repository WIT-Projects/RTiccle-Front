import storage from '@react-native-firebase/storage';
import auth from "@react-native-firebase/auth";

const user = auth().currentUser;
const userRef = storage().ref("ticcle").child(user.uid);

async function uploadImageToStorage(imageName, source) {
    // source: use the Blob or File API or Uint8Array or ...

    // Upload file to the object 'ticcle/{uid}/{imageName}'
    var uploadTask = userRef.child(imageName).putFile(source);
    var imgaeLink = undefined;

    return new Promise((resolve, reject) => {     
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(storage.TaskEvent.STATE_CHANGED, function(snapshot) {
        // Observe state change events such as progress, pause, and resume
        }, function(err) {
            // Handle unsuccessful uploads
            return reject(err);
        }, function complete() {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            let downloadURL = uploadTask.snapshot.ref.getDownloadURL();
            return resolve(downloadURL);
        });
    });
}

export {
    uploadImageToStorage,
}