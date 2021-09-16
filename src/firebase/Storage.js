import storage from '@react-native-firebase/storage';
import auth from "@react-native-firebase/auth";

const user = auth().currentUser;
const userRef = storage().ref("ticcle").child(user.uid);

async function uploadImageToStorage(imageName, source) {
    // source: use the Blob or File API or Uint8Array or ...

    // Upload file to the object 'ticcle/{uid}/{imageName}'
    var uploadTask = userRef.child(imageName).put(source);
    var imgaeLink = undefined;

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function(snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        }, function(error) {
            // Handle error
            console.log(error.code)
        }, function() {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
                imgaeLink = downloadURL
            });
        })
    uploadTask.then(() => { return imgaeLink })
}

export {
    uploadImageToStorage,
}