import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AttendanceHistory = () => {
  const [attendanceHistory, setAttendanceHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { employeeId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/history/${employeeId}`)
      .then((result) => {
        setAttendanceHistory(result.data || []);
      })
      .catch((error) => {
        console.error("Error fetching attendance history:", error);
      });
  }, [employeeId]);

  const formatDate = (dateValue) => {
    const date = new Date(dateValue);
    return date.toLocaleDateString();
  };

  const filteredAttendanceHistory = attendanceHistory.filter((item) =>
    formatDate(item.attendanceDate).includes(searchTerm)
  );

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4 fw-bold">
          Attendance History - {employeeId}
        </h2>

        {/* Search */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Search by date (e.g. 12/5/2024)"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table className="table table-hover table-bordered text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>Date</th>
              <th>Employee ID</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredAttendanceHistory.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-muted py-3">
                  No matching results
                </td>
              </tr>
            ) : (
              filteredAttendanceHistory.map((item, index) => (
                <tr key={index}>
                  <td>{formatDate(item.attendanceDate)}</td>
                  <td className="fw-semibold">{item.employeeId}</td>
                  <td
                    className="fw-bold"
                    style={{
                      color: item.status === "present" ? "green" : "red",
                    }}
                  >
                    {item.status}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceHistory;
