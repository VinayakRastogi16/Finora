import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container-lg p-5 mb-5">
      <div className="row text-center">
        <div className="col-md-12">
          <h1 className="mt-5 fs-4 mb-4">404 Not Found</h1>

          <h3>Kiaan couldn’t find that page</h3>
          <p style={{ color: "#6c757d", fontWeight: "" }}>
            We couldn’t find the page you were looking for. Visit <Link to='/'>Zerodha’s home page</Link>

          </p>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
