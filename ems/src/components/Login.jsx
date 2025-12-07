import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img1 from "../assets/i.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/admin/login", { email, password })
      .then((result) => {
        console.log(result.data);

        if (result.data.message === "Admin Login Success") {
          navigate("/");
        } else {
          alert("Invalid Email or Password");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background:
          "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        padding: "20px",
      }}
    >
      <div
        className="container p-4 p-md-5 rounded-4 shadow-lg"
        style={{
          maxWidth: "900px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h2 className="text-center text-white fw-bold mb-4">
          Admin Login
        </h2>

        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={img1}
              alt="Logo"
              className="img-fluid"
              style={{ maxHeight: "300px" }}
            />
          </div>

          {/* Login Form */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-3">
                <label className="form-label text-white fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label text-white fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                />
              </div>

              {/* Signup Link */}
              <p className="text-white mt-2">
                Don't have an admin account?{" "}
                <a href="/register" className="text-warning fw-bold">
                  Signup
                </a>
              </p>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-warning w-100 btn-lg fw-semibold mt-3 rounded-pill"
                style={{
                  boxShadow: "0 0 15px rgba(255, 193, 7, 0.5)",
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
