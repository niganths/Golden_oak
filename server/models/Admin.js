const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,  // same style as EmployeeModel (no hashing)
    role: { type: String, default: "admin" }
});

const AdminModel = mongoose.model("admins", AdminSchema);
module.exports = AdminModel;
