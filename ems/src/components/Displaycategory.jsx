import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Displaycategory = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getcategory")
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  const Delete = (id) => {
    axios.delete(`http://localhost:3001/deletecategory/${id}`)
      .then(() => window.location.reload())
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "#f5f6fa" }}>
      <div 
        className="bg-white shadow-lg rounded p-4"
        style={{ width: "90%", maxWidth: "600px", borderRadius: "20px" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold" style={{ margin: 0 }}>Pending Works</h4>

          <Link 
            to="/cat" 
            className="btn btn-primary"
            style={{
              borderRadius: "10px",
              padding: "8px 15px",
              fontWeight: "500"
            }}
          >
            + Add Work
          </Link>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th style={{ width: "70%" }}>Task Name</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-center py-3 text-muted">
                    No pending tasks
                  </td>
                </tr>
              ) : (
                user.map((item, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: "500" }}>{item.name}</td>

                    <td className="text-center">
                      <button
                        className="btn btn-danger"
                        style={{
                          borderRadius: "8px",
                          padding: "5px 15px",
                          fontWeight: "500"
                        }}
                        onClick={() => Delete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Displaycategory;
