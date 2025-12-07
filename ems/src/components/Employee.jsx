import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Employee = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/employee")
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteUser/${id}`)
      .then(() => window.location.reload())
      .catch(err => console.log(err));
  };

  return (
    <div className="container py-5" style={{ maxWidth: "1100px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Employee Records</h2>
        <Link to='/create' className='btn btn-primary px-4'>+ Add Employee</Link>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <div className='table-responsive'>
            <table className='table table-hover align-middle mb-0'>
              <thead className='table-dark'>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {user.map((item, index) => (
                  <tr key={index}>
                    <td className='fw-semibold'>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    <td className='text-center'>
                      <div className="d-flex gap-3 justify-content-center">
                        <Link 
                          to={`/update/${item._id}`} 
                          className='btn btn-outline-success btn-sm px-3'
                        >
                          Update
                        </Link>
                        <button 
                          className='btn btn-outline-danger btn-sm px-3'
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {user.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-muted">
                      No employees found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
