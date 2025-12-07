import axios from "axios";
import React, { useEffect, useState } from "react";
import DashChart from "./DashChart";

function Home() {
  const [categoryCount, setCategoryCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3001/adminCount")
      .then(result => setAdminCount(result.data.count))
      .catch(err => console.log(err));
  }, []);

  const updateCounts = (count, count1) => {
    setCategoryCount(count);
    setEmployeeCount(count1);
  };

  const cardStyle = {
    borderRadius: "20px",
    background: "white",
    padding: "25px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    transition: "0.3s",
  };

  const cardHover = (e) => {
    e.target.closest(".premium-card").style.transform = "translateY(-5px)";
    e.target.closest(".premium-card").style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)";
  };

  const cardLeave = (e) => {
    e.target.closest(".premium-card").style.transform = "translateY(0px)";
    e.target.closest(".premium-card").style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
  };

  return (
    <div className="container-fluid py-3">

      {/* Page Heading */}
      <h2 className="fw-bold mt-3 text-center">
        Dashboard <span style={{ color: "red" }}>Overview</span>
      </h2>

      {/* Stats Cards */}
      <div className="row g-4 mt-4">

        <div className="col-12 col-md-4">
          <div
            className="premium-card"
            style={cardStyle}
            onMouseEnter={cardHover}
            onMouseLeave={cardLeave}
          >
            <h5 className="text-secondary text-center mb-2">Admin Count</h5>
            <hr />
            <h2 className="text-center fw-bold">{adminCount}</h2>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div
            className="premium-card"
            style={cardStyle}
            onMouseEnter={cardHover}
            onMouseLeave={cardLeave}
          >
            <h5 className="text-secondary text-center mb-2">Number of Employees</h5>
            <hr />
            <h2 className="text-center fw-bold">{employeeCount}</h2>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div
            className="premium-card"
            style={cardStyle}
            onMouseEnter={cardHover}
            onMouseLeave={cardLeave}
          >
            <h5 className="text-secondary text-center mb-2">Pending Works</h5>
            <hr />
            <h2 className="text-center fw-bold">{categoryCount}</h2>
          </div>
        </div>
      </div>

      {/* Graph Area */}
      <div className="row mt-5">
        <div className="col-12 col-md-8 mx-auto">
          <div
            style={{
              borderRadius: "20px",
              background: "white",
              padding: "20px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h4 className="text-center mb-3 fw-bold">Analytics Graph</h4>
            <DashChart updateCounts={updateCounts} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
