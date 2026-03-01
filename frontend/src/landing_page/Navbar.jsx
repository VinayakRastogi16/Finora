/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (

      <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor:"#ffffff"}}>
        <div class="container-lg">
          <Link class="navbar-brand" to="/">
            <img src="media/images/logo.svg" style={{width:"23%"}} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex" style={{marginLeft:"15%"}} >

              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link options" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link options" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link options" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link options" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link options" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link options" to="/support">
                  Support
                </Link>
              </li>
              <li class="nav-item " style={{paddingTop:"5px", marginLeft:"20px"}}>
                <button
                    class="toggler btn-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#"
                    aria-controls=""
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{border:"none", backgroundColor:"white"}}
                  >
            
              </button>
              </li>
            </ul>
             
            </form>
          </div>
        </div>
      </nav>

  );
}

export default Navbar;
