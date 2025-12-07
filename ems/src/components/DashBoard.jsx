import React from "react";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as Icon from 'react-bootstrap-icons';
import './Home.css'; // keep your custom CSS here
import img from '../assets/i.jpg';

function DashBoard() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">

        {/* Sidebar */}
        <aside
          className="col-auto col-md-2 bg-dark text-white d-flex flex-column justify-content-between py-4 shadow-lg"
          style={{ minHeight: "100vh", position: "sticky", top: 0 }}
        >
          <div>
            <Link to="/" className="text-decoration-none text-white d-flex align-items-center ps-3 mb-3">
              <span className="fs-3 fw-bold">
                G<sub>olden<span style={{ color: "red" }}>Oak</span></sub>
              </span>
            </Link>

            <hr className="border-secondary" />

            <ul className="nav flex-column px-2">
              <li className="nav-item mb-3">
                <Link to="/" className="nav-link text-white d-flex align-items-center sidebar-link">
                  <Icon.Speedometer2 size={20} />
                  <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>

              <li className="nav-item mb-3">
                <Link to="/employee" className="nav-link text-white d-flex align-items-center sidebar-link">
                  <Icon.People size={20} />
                  <span className="ms-3 d-none d-sm-inline">Manage Employees</span>
                </Link>
              </li>

              <li className="nav-item mb-3">
                <Link to="/category" className="nav-link text-white d-flex align-items-center sidebar-link">
                  <Icon.Grid size={20} />
                  <span className="ms-3 d-none d-sm-inline">Pending Works</span>
                </Link>
              </li>

              <li className="nav-item mb-3">
                <Link to="/attendance" className="nav-link text-white d-flex align-items-center sidebar-link">
                  <Icon.FileEarmarkCheckFill size={20} />
                  <span className="ms-3 d-none d-sm-inline">Attendance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Profile Dropdown */}
          <div className="dropdown px-3">
            <a
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              href="#!"
              id="accountMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={img} alt="profile" width="36" height="36" className="rounded-circle" />
              <span className="ms-2 d-none d-sm-inline">Account</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-dark shadow" aria-labelledby="accountMenu">
              <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="/login">Sign Out</Link></li>
            </ul>
          </div>

        </aside>

        {/* Main Content */}
        <main className="col bg-light">
          {/* Top Navbar */}
          <div className="w-100 p-3 bg-white shadow-sm d-flex justify-content-center align-items-center">
            <h4 className="m-0 fw-bold">
              Employ<span style={{ color: "red" }}>Ease</span>
            </h4>

            {/* Optional: right side small actions (responsive) */}
            <div className="ms-auto d-flex align-items-center gap-2 me-2">
              {/* add any topbar buttons here */}
            </div>
          </div>

          {/* Page Content */}
          <div className="p-4">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}

export default DashBoard;
