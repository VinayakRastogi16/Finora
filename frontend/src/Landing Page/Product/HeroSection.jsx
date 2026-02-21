import React from "react";

function HeroSection() {
  return (
    <div className="container-lg border-bottom pb-5 mb-5">
      <div className="row text-center pt-5 mt-5 pb-5">
        <h3 style={{ color: "#444" }}>Zerodha Products</h3>
        <p className="fs-5 mt-2 " style={{ color: "#444" }}>
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="pt-2" style={{ color: "#444" }}>
          Check out our{" "}
          <a className="email" href="#">
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
