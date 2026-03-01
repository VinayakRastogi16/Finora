import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await axios.post(
        "http://localhost:8080/login",
        inputValue,
        { withCredentials: true },
      );

      if (data.success) {
        window.location.href = 'http://localhost:3001/';
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container-lg">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-6">
          <h2 className="text-center">Login Account</h2>
          {error && (
            <div className="alert alert-danger mt-5 alert-dismissible fade show">
              <strong>{error}</strong>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-4">
            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={inputValue.email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <br />
            <br />
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={inputValue.password}
                className="form-control"
                id="password"
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <button className="pb-1 mt-4 btn btn-primary mb-5 fs-5 btn-hover">
              Submit
            </button>
            <span className="ms-5">
              Don't have an account? <Link to={"/signup"}>Signup</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
