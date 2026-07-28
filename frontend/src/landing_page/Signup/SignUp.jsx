import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
  

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/signup`,
        inputValue,
        { withCredentials: true }
      );

      if (data?.success) {
        window.location.href = "https://finora-dashboard-y3fy.netlify.app"; // SPA-safe redirect
      } else {
        setError(data?.message || "Signup failed");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Signup failed"
      );
    }
  };

  return (
    <div className="container-lg">
      <div className="row d-flex justify-content-center mt-5 mb-5">
        <div className="col-5">
          <h2 className="text-center">
            Open a free demat and trading account online
          </h2>

          <h5 className="fs-5 text-muted">
            Start investing brokerage free and join a community of 1.5+ crore investors
          </h5>

          {error && (
            <div className="alert alert-danger mt-4 alert-dismissible fade show">
              {error}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-5">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                value={inputValue.email}
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                name="username"
                value={inputValue.username}
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={inputValue.password}
                onChange={handleOnChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 fs-5 mb-4">
              Signup
            </button>

            <p className="text-center">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;