import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Login = () => {

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
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
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        inputValue,
        { withCredentials: true }
      );

      if (data?.success) {
        window.location.href = "https://finora-dashboard-y3fy.netlify.app";
      } else {
        setError(data?.message || "Invalid credentials");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="container-lg">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-6">
          <h2 className="text-center">Login Account</h2>

          {error && (
            <div className="alert alert-danger mt-4 alert-dismissible fade show">
              <strong>{error}</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={inputValue.email}
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                value={inputValue.password}
                onChange={handleOnChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 fs-5">
              Login
            </button>

            <p className="text-center mt-3">
              Don’t have an account? <Link to="/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;