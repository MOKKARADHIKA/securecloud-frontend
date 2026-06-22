// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function UploadDocument() {
//   const [file, setFile] = useState(null);
//   const [keywords, setKeywords] = useState("");
//   const navigate = useNavigate();

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       alert("Please select a file");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("keywords", keywords);

//     try {
//       await axios.post(
//   "http://localhost:5000/api/files/upload",
//   formData,
//   {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: localStorage.getItem("token"),
//     },
//   }
// );

//       alert(`${file.name} uploaded successfully!`);

//       navigate("/dashboard/cloud");
//     } catch (err) {
//       console.log(err);
//       alert("Upload failed");
//     }
//   };

//   return (
//     <div className="page-container">
//       <h1>Upload Encrypted Document</h1>

//       <div className="upload-card">
//         <form onSubmit={handleUpload}>
//           <input
//             type="file"
//             onChange={(e) => setFile(e.target.files[0])}
//           />

//           <br /><br />

//           <input
//             type="text"
//             placeholder="Enter keywords (comma separated)"
//             value={keywords}
//             onChange={(e) => setKeywords(e.target.value)}
//           />

//           <br /><br />

//           <button type="submit">
//             Encrypt & Upload
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UploadDocument;

import DragDropUpload from "../components/DragDropUpload";

function UploadDocument() {
  return (
    <div className="page-container">
      <h1>Upload Files (Google Drive Style)</h1>
      <DragDropUpload />
    </div>
  );
}

export default UploadDocument;