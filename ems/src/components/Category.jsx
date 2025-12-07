import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const send = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Category name cannot be empty!");
      return;
    }

    axios
      .post("http://localhost:3001/add", { name })
      .then((result) => {
        console.log(result);

        alert("Category added successfully!");
        navigate("/category");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow p-4 w-50">
        <h3 className="fw-bold text-center mb-4">Add Pending Work</h3>

        <form onSubmit={send}>
          <label className="fw-semibold">Work Name</label>
          <input
            type="text"
            placeholder="Enter work name"
            className="form-control mt-2"
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit" className="btn btn-success w-100 mt-4 fw-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Category;
