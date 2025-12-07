import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Home from './components/Home';
import Employee from './components/Employee';
import Category from './components/Category';
import Profile from './components/Profile';
import CreateUser from './components/CreateUser';
import Updateuser from './components/Updateuser';
import Signup from './components/Signup';
import Login from './components/Login';
import AttendanceForm from './components/Attendance';
import Displaycategory from './components/Displaycategory';
import AttendanceHistory from './components/AttendanceHistory';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" index element={<Login />} />
        <Route path="/register" element={<Signup />} />
       
        <Route path="/" element={<DashBoard />}>
          <Route index element={<Home />} />
          <Route path="/category" element={<Displaycategory />} />
          <Route path="/cat" element={<Category />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/attendance" element={<AttendanceForm />} />
          <Route path="/history/:employeeId" element={<AttendanceHistory />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<Updateuser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
