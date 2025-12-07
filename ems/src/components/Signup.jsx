import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import img1 from "../assets/i.jpg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/admin/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        padding: "20px",
      }}
    >
      <div
        className="container p-4 p-md-5 rounded-4 shadow-lg"
        style={{
          maxWidth: "900px",
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 className="text-center text-white fw-bold mb-4">Admin Sign Up</h2>

        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={img1}
              alt="Signup Illustration"
              className="img-fluid"
              style={{ maxHeight: "300px" }}
            />
          </div>

          {/* Form */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label text-white fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label text-white fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.3)",
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
                    background: "rgba(255,255,255,0.2)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                />
              </div>

              {/* Login redirect */}
              <p className="text-white mt-2">
                Already have an account?{" "}
                <Link to="/login" className="text-warning fw-bold">
                  Login
                </Link>
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-warning w-100 btn-lg fw-semibold mt-3 rounded-pill"
                style={{
                  boxShadow: "0 0 15px rgba(255, 193, 7, 0.5)",
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
