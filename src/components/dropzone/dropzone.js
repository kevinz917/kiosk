import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import request from "superagent";
import axios from "axios";

const CLOUDINARY_UPLOAD_PRESET = "sinme3ku";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/kevinz917/upload";

const Upload = (props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  useEffect(() => {
    setUploadedFile(acceptedFiles[0]);
    console.log(acceptedFiles[0]);
  }, [acceptedFiles]);

  const handleImageUpload = async () => {
    console.log(uploadedFile);
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", uploadedFile);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        setUploadedUrl(response.body.secure_url);
        console.log("Success");
      }
    });
  };

  return (
    <div>
      <div>
        <section className="container">
          <div
            {...getRootProps({ className: "dropzone" })}
            className="bg-gray-200 w-2/5 p-8 rounded-lg border-dashed border-gray-400 border-4 text-center"
          >
            <div>
              <input {...getInputProps()} />
              <p>{props.text}</p>
            </div>
          </div>
        </section>
      </div>
      <br />
      <div>
        {uploadedUrl != "" ? (
          <a href={uploadedUrl} target="_blank" style={{ color: "Blue" }}>
            {uploadedUrl}
          </a>
        ) : null}
      </div>
    </div>
  );
};

// <div>
//         <button onClick={() => handleImageUpload()}>Press me</button>
//       </div>

// <aside>
//             <h4>Files</h4>
//             <ul>{files}</ul>
//           </aside>

export default Upload;
