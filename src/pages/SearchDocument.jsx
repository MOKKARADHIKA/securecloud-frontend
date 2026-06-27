import { useState } from "react";

function SearchDocument() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ DOWNLOAD FUNCTION (correct scope)
  const handleDownload = async (storedFileName, fileName) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `http://securecloud-backend.vercel.app/api/files/download/${storedFileName}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Download failed");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;

      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.log(err);
      alert("Download failed");
    }
  };

  // ✅ SEARCH FUNCTION
  const handleSearch = async () => {
    if (!keyword) {
      alert("Enter keyword");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `http://securecloud-backend.vercel.app/api/files/search?keyword=${keyword}`,
        {
          headers: {
  Authorization: `Bearer ${token}`,
},
        }
      );

      const data = await res.json();
      setResults(data.files || []);
    } catch (err) {
      console.log(err);
      alert("Search failed");
    }

    setLoading(false);
  };

  return (
    <div className="page-container">
      <h1>Search Encrypted Documents</h1>

      {/* SEARCH BOX */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter keyword..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* LOADING */}
      {loading && <p>Loading...</p>}

      {/* RESULTS TABLE */}
      <table className="file-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Keywords</th>
            <th>Upload Date</th>
            <th>Download</th>
          </tr>
        </thead>

        <tbody>
          {results.length === 0 && !loading ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No files found
              </td>
            </tr>
          ) : (
            results.map((file) => (
              <tr key={file._id}>
                <td>{file.fileName}</td>

                <td>{file.keywords?.join(", ") || "N/A"}</td>

                <td>
                  {file.uploadDate
                    ? new Date(file.uploadDate).toLocaleDateString()
                    : "N/A"}
                </td>

                {/* DOWNLOAD BUTTON */}
                <td>
                  <button
                    onClick={() =>
                     handleDownload(
  file.storedFileName,
  file.fileName
)
                    }
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SearchDocument;