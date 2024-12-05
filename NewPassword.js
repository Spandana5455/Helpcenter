import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './NewPassword.css';

function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Password successfully created!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card  shadow p-4 h-75 custom-card-bg">
        <h2 className="text-center mb-3 mt-5 fw-bold custom-text-color">New Password</h2>
        <div className="d-flex justify-content-center align-items-center">
        <div className="border border-success rounded w-75 mb-4">
          <p className="text-center text-muted mb-2 fs-4">
            Please create a new password that you don't use on any other site.
          </p>
        </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <div className="form-group mb-4 w-75">
            <input type="password" className="form-control text-center p-3" placeholder="Create new password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="form-group mb-4 w-75">
            <input type="password" className="form-control text-center p-3" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}required/>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-success btn-lg w-50 opacity-75">
            Continue
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default NewPassword;



