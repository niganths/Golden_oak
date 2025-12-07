import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.age) {
      alert("All fields are required!");
      return;
    }

    axios
      .post("http://localhost:3001/create", { 
        name: form.name, 
        email: form.email, 
        age: parseInt(form.age) 
      })
      .then(() => navigate('/employee'))
      .catch(err => console.log(err));
  };

  return (
    <div className='row'>
      <div className='d-flex justify-content-center align-items-center vh-100 bg-black col-12'>
        <div className='w-75 w-sm-50 bg-white p-4 rounded'>
          <form onSubmit={Submit}>
            <h2 className='mb-3'>Add User</h2>

            <div className='mb-3'>
              <label>NAME</label>
              <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Enter name'
                onChange={handleChange}
              />
            </div>

            <div className='mb-3'>
              <label>EMAIL</label>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Enter email'
                onChange={handleChange}
              />
            </div>

            <div className='mb-3'>
              <label>AGE</label>
              <input
                type='number'
                name='age'
                className='form-control'
                placeholder='Enter age'
                onChange={handleChange}
              />
            </div>

            <button className='btn btn-success w-100'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
