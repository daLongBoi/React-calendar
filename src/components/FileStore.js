import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import Calendar from "./Calendar";
import { DownloadIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";

function FileStore({
  setDocumentName,
  setDocumentDownloadURL,
  selectedEvent,
  setFormData,
}) {
  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState(null);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const sotrageRef = ref(storage, `BookingDocuments/${file.name}`);
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
        getDownloadURL(ref(storage, `BookingDocuments/${file.name}`)).then(
          (url) => {
            setDownloadURL(url);
            setDocumentName(file.name);
            setDocumentDownloadURL(url);

            // Store the file URL in the specific event data
            setFormData((prevFormData) => ({
              ...prevFormData,
              fileURL: url,
            }));
          }
        );
      }
    );
  };

  const condition = () => {
    if (downloadURL == null) {
      return null;
    }

    return (
      <a
        href={downloadURL}
        style={{
          pointerEvents: downloadURL ? "auto" : "none",
          opacity: downloadURL ? 1 : 0.5,
        }}
      >
        Download file: <DownloadIcon />
      </a>
    );
  };

  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
      <hr />
      {condition()}
    </div>
  );
}

export default FileStore;
