function CloudDashboard() {

  const file =
    localStorage.getItem("uploadedFile");

  return (
    <div className="page-container">

      <h1>Cloud Storage Dashboard</h1>

      <table className="table">

        <thead>
          <tr>
            <th>File Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{file || "No File Uploaded"}</td>
            <td>Encrypted</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default CloudDashboard;