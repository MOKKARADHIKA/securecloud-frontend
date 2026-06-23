import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cloud() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(null);

  const navigate = useNavigate();
const role = localStorage.getItem("role");
  useEffect(() => {
  const token = localStorage.getItem("token");

  

  fetch(
    "https://securecloud-backend.vercel.app/api/files/all-files",
    {
      headers: {
        Authorization: token,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      setFiles(data.files || []);
    })
    .catch((err) => console.log(err));
}, []);

  // SEARCH FILTER
  const filteredFiles = files.filter((file) =>
    file.fileName.toLowerCase().includes(search.toLowerCase())
  );

  // RIGHT CLICK MENU
  const handleContextMenu = (e, file) => {
    e.preventDefault();

    setMenu({
      x: e.pageX,
      y: e.pageY,
      file,
    });
  };

  const closeMenu = () => {
    setMenu(null);
  };

  const handleRename = async () => {
  const newName = prompt(
    "Enter new file name",
    menu.file.fileName
  );

  if (!newName) return;

  try {
    const res = await fetch(
  `https://securecloud-backend.vercel.app/api/files/rename/${menu.file._id}`,
  {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      newName,
    }),
  }
);

    const data = await res.json();

    alert(data.message);

    setFiles(
      files.map((file) =>
        file._id === menu.file._id
          ? { ...file, fileName: newName }
          : file
      )
    );

  } catch (err) {
    console.log(err);
    alert("Rename failed");
  }

  closeMenu();
};

  const handleDelete = async () => {
  const confirmDelete = window.confirm(
    `Delete ${menu.file.fileName}?`
  );

  if (!confirmDelete) return;

  try {
    const res = await fetch(
      `https://securecloud-backend.vercel.app/api/files/delete/${menu.file._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            localStorage.getItem("token"),
        },
      }
    );

    const data = await res.json();

    alert(data.message);

    setFiles(
      files.filter(
        (f) => f._id !== menu.file._id
      )
    );

  } catch (err) {
    console.log(err);
    alert("Delete failed");
  }

  closeMenu();
};


const handleDownload = async () => {
  try {
    const storedFileName =
      menu.file.filePath.split("\\").pop();

    const token = localStorage.getItem("token");

    const res = await fetch(
      `https://securecloud-backend.vercel.app/api/files/download/${storedFileName}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (!res.ok) {
      alert("Download failed");
      return;
    }

    const blob = await res.blob();

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = menu.file.fileName;

    document.body.appendChild(a);

    a.click();

    a.remove();

    window.URL.revokeObjectURL(url);

  } catch (err) {
    console.log(err);
    alert("Download failed");
  }

  closeMenu();
};
  return (
    <div className="drive-app">

      {/* SIDEBAR */}
      <div className="drive-sidebar">

        <h2>☁ My Drive</h2>

        <button
          onClick={() => navigate("/dashboard/upload")}
        >
          ⬆ Upload
        </button>

        <button
          onClick={() => navigate("/dashboard/search")}
        >
          🔍 Search
        </button>

        <button
          onClick={() => navigate("/dashboard/cloud")}
        >
          📁 My Files
        </button>

      </div>

      {/* MAIN */}
      <div className="drive-main">

        {/* TOPBAR */}
        <div className="drive-topbar">

          <input
            type="text"
            placeholder="Search files..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="drive-search"
          />

        </div>

        {/* FILE GRID */}
        <div className="drive-grid">

          {filteredFiles.map((file) => (
            <div
              key={file._id}
              className="drive-card"
              onClick={() => setSelectedFile(file)}
              onContextMenu={(e) =>
                handleContextMenu(e, file)
              }
            >
              <div className="drive-icon">
                📄
              </div>

              <div className="drive-name">
                {file.fileName}
              </div>

              <div className="drive-date">
                {new Date(
                  file.uploadDate
                ).toLocaleDateString()}
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* FILE PREVIEW */}
      {selectedFile && (
        <div className="modal-overlay">

          <div className="modal-box">

            <h2>📄 File Preview</h2>

            <p>
              <b>Name:</b>{" "}
              {selectedFile.fileName}
            </p>

            <p>
              <b>Encrypted:</b>{" "}
              {selectedFile.encryptedFileName}
            </p>

            <p>
              <b>Date:</b>{" "}
              {new Date(
                selectedFile.uploadDate
              ).toLocaleDateString()}
            </p>

            <button
              onClick={() =>
                setSelectedFile(null)
              }
              className="close-btn"
            >
              Close
            </button>

          </div>

        </div>
      )}

      {/* RIGHT CLICK MENU */}
      {menu && (
  <div
    className="context-menu"
    style={{
      top: menu.y,
      left: menu.x,
    }}
    onMouseLeave={closeMenu}
  >

    {role === "DATA_USER" && (
      <div onClick={handleDownload}>
        ⬇ Download
      </div>
    )}

    {role === "DATA_OWNER" && (
      <>
        <div onClick={handleRename}>
          ✏ Rename
        </div>

        <div onClick={handleDelete}>
          🗑 Delete
        </div>
      </>
    )}

  </div>
)}
    </div>
  );
}

export default Cloud;