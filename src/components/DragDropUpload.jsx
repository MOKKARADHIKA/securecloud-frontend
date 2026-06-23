import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DragDropUpload() {
  const [file, setFile] = useState(null);
  const [keywords, setKeywords] = useState("");

  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: false,
    noKeyboard: false,
  });

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("keywords", keywords);

    try {
      await axios.post(
        "https://securecloud-backend.vercel.app/api/files/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      alert("Upload successful!");

      setFile(null);
      setKeywords("");

      // Redirect to Cloud page
      navigate("/dashboard/cloud");

    } catch (err) {
      console.log(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="upload-container">

      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />

        <p>📁 Drag & Drop file here</p>
        <p>OR</p>

        <button type="button" onClick={open}>
          Click to Select File
        </button>
      </div>

      {file && (
        <p className="file-name">
          Selected: {file.name}
        </p>
      )}

      <input
        type="text"
        placeholder="Enter keywords"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />

      <button onClick={handleUpload}>
        Upload
      </button>

    </div>
  );
}

export default DragDropUpload;