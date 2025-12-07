import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../assets/i.jpg"; // default admin image

const Profile = () => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    // Fetch first admin from backend
    axios
        .get("http://localhost:3001/getadmins") 
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setAdmin(res.data[0]); // take first admin
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!admin) {
    return <h3 className="text-center mt-5">Loading admin profile...</h3>;
  }

  return (
    <div className="container py-4 d-flex justify-content-center">
      <div
        style={{
          width: "450px",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        }}
      >
        {/* Profile Picture */}
        <div className="text-center mb-4">
          <img
            src={img}
            alt="Admin"
            className="rounded-circle shadow"
            style={{ width: "120px", height: "120px", border: "3px solid white" }}
          />
        </div>

        {/* Admin Name */}
        <h3 className="text-center fw-bold">{admin.name}</h3>

        {/* Admin Role */}
        <p className="text-center text-secondary">Administrator</p>

        <hr />

        {/* Info Fields */}
        <div className="mb-3">
          <label className="fw-bold">Name</label>
          <input type="text" className="form-control" value={admin.name} readOnly />
        </div>

        <div className="mb-3">
          <label className="fw-bold">Email</label>
          <input type="email" className="form-control" value={admin.email} readOnly />
        </div>

        <div className="mb-3">
          <label className="fw-bold">Role</label>
          <input type="text" className="form-control" value="Administrator" readOnly />
        </div>
      </div>
    </div>
  );
};

export default Profile;
