import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function DashboardAnalytics() {

  const uploadData = [
    { month: "Jan", uploads: 12 },
    { month: "Feb", uploads: 18 },
    { month: "Mar", uploads: 25 },
    { month: "Apr", uploads: 30 },
    { month: "May", uploads: 22 },
    { month: "Jun", uploads: 40 }
  ];

  const roleData = [
    { role: "Owner", downloads: 120 },
    { role: "User", downloads: 340 }
  ];

  return (
    <div className="analytics-container">

      <h1>📊 System Analytics</h1>

      {/* LINE CHART */}
      <div className="chart-box">
        <h3>Uploads Over Time</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={uploadData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uploads" stroke="#4f46e5" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART */}
      <div className="chart-box">
        <h3>Downloads by Role</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={roleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="role" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="downloads" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default DashboardAnalytics;