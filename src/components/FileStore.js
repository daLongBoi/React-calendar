import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import { v4 } from 'uuid';
import EventModal from './EventModal';

const FileStore = (formData) => {
    const [imageUpload, setImageUpload] = useState(null);
    const [uploadList, setUploadList] = useState([]);
    const uploadReference = ref(storage, 'BookingDocuments/');
    
    const uploadImage = () => {
        if (imageUpload == null) {
            return;
        }
        const EventName = EventModal.folderName; 
        console.log(EventName);
        const imageRef = ref(storage, 'BookingDocuments/' + `${EventName}/` + `${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            console.log('Uploaded file!');
            alert('File Uploaded');
        });
    };


    useEffect(() => {
        listAll(uploadReference).then((res) => {
                     res.items.forEach((itemRef) => {
                getDownloadURL(itemRef).then((url) => {
                    setUploadList((prev) => [...prev, { name: itemRef.name, url: url }]);
                })
            })
        });
    }, []);


    return (
        <div className="FileStore">

            <input type="file" id="file" name="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
            <button 
                          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"

            onClick={uploadImage}>Upload File</button>
            {/* {uploadList.map((item) => {
                return <Link src= {item.url} download={item.name}>{item.name}</Link>
            })} */}
        </div>
    )
}
export default FileStore;