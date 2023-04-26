import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from 'uuid';
function FileStore() {
  const [progress, setProgress] = useState(0);
    const [downloadURL, setDownloadURL] = useState(null);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `BookingDocuments/${file.name + v4()}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
            setDownloadURL(downloadURL);
        });
      }
    );
  };

  const condition =  () => {
    if (downloadURL == null) {
    return null ; 
    }
    else
    return ( <a 
    href="{downloadURL}">Download file: <i>download icon</i></a>
    )
  }

  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
      <hr />
      <h2>Uploading done {progress}%</h2>
   
     {condition()}
    </div>
  );
}

export default FileStore;