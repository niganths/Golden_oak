import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Attendance = () => {
  const [status, setStatus] = useState({});
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/employee")
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleMarkAttendance = (e, employee) => {
    e.preventDefault();

    const finalStatus = status[employee._id] || "present";

    axios
      .post("http://localhost:3001/attendancee", {
        employeeId: employee.name,
        status: finalStatus,
      })
      .then((result) => {
        alert("Attendance Marked Successfully");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4 fw-bold">Employee Attendance Manager</h2>

        <table className="table table-hover table-bordered align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Mark Attendance</th>
              <th>History</th>
            </tr>
          </thead>

          <tbody>
            {user.map((item) => (
              <tr key={item._id}>
                <td className="fw-semibold">{item.name}</td>

                <td>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      setStatus({ ...status, [item._id]: e.target.value })
                    }
                  >
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                  </select>
                </td>

                <td>
                  <button
                    className="btn btn-success px-3"
                    onClick={(e) => handleMarkAttendance(e, item)}
                  >
                    Mark
                  </button>
                </td>

                <td>
                  <Link className="btn btn-primary px-3" to={`/history/${item.name}`}>
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {user.length === 0 && (
          <p className="text-center text-muted mt-3">No employees found.</p>
        )}
      </div>
    </div>
  );
};

export default Attendance;
