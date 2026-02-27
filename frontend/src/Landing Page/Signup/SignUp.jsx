import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8080/signup",
        inputValue,
        { withCredentials: true },
      );

      if (data.success) {
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }

    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div className="containr-lg">
      <div className="row d-flex justify-content-center mt-5 mb-5">
        <div className="col-4 ">
          <h2 className="text-center">
            Open a free demat and trading account online
          </h2>
          
            <form onSubmit={handleSubmit} className="mt-5" noValidate>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={inputValue.email}
                  name="email"
                  placeholder="Enter your email."
                  onChange={handleOnChange}
                />
              </div>
              <br />
              <div>
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={inputValue.username}
                  placeholder="Enter your username."
                  onChange={handleOnChange}
                />
              </div>
              <br />
              <div>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={inputValue.password}
                  placeholder="Enter your password."
                  onChange={handleOnChange}
                />
              </div>
              <button className="pb-1 mt-4 btn btn-primary mb-5 fs-5 btn-hover">Submit</button>
              <span className="ms-5">
                       Already have an account? <Link to={"/login"}>Login</Link>
                      </span>
            </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
