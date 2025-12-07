import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Updateuser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getuser/${id}`)
      .then((result) => {
        console.log(result.data);

        if (result.data) {
          setName(result.data.name);
          setEmail(result.data.email);
          setAge(result.data.age);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/update/${id}`, {
        name,
        email,
        age: parseInt(age, 10),
      })
      .then((result) => {
        console.log(result);
        navigate('/employee');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-black">
      <div className="w-75 bg-white p-4 rounded shadow">
        <form onSubmit={Update}>
          <h2 className="mb-3">Update User</h2>

          <div className="mb-3">
            <label className="form-label">NAME</label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">EMAIL</label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">AGE</label>
            <input
              type="number"
              placeholder="Enter age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-success w-100">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Updateuser;
