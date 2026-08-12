import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="container">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="main">

        {/* TOP BAR */}
        <div className="topbar">
          <h1>Student Dashboard</h1>
          <button className="sos">SOS ALERT</button>
        </div>

        {/* DASHBOARD GRID */}
        <div className="dashboard">

          {/* LEFT SIDE */}
          <div>
            <h3>City Notifications</h3>

            <div className="card">
              <h4>Air Pollution Alert</h4>
              <p>AQI level high</p>
            </div>

            <div className="card">
              <h4>Water Maintenance</h4>
              <p>Water off 2PM - 5PM</p>
            </div>

            <div className="card">
              <h4>Traffic Alert</h4>
              <p>Main street congestion</p>
            </div>

            <div className="card">
              <h4>Power Maintenance</h4>
              <p>Sector 4 at 10PM</p>
            </div>
          </div>

          {/* RIGHT SIDE (MAP) */}
          <div className="map-section">
            <iframe
              src="https://maps.google.com/maps?q=Lovely%20Professional%20University&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="LPU Map"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;