import React from "react";
import { Link } from "react-router-dom";

function Hero({ heading, l1, l2, l3, l4, l5, l6, collapse, collapseId, icon,}) {
  return (
    <div className= "container-lg ps-5 mt-5 mb-5" style={{marginLeft:'17.5%',}}>
      <div className="row">
        <div className="col-11">
          <div
            className="row btn-hover2 w-100"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={collapse}
            aria-expanded="true"
            aria-controls="helpCollapse"
          >
            <div className="col-1 text-center" style={{backgroundColor:"#387dd113", textAlign:'center', paddingTop:'1.7vh'}}>{icon}</div>
            <div className="col-7 pt-3">
                {heading}</div>
            <div className="col-3">
              <img
                src="media/images/chevron.png"
                alt=""
                className="img-fluid float-end mt-1 pt-2 rotate"
                style={{ width: "10%" }}
              />
            </div>
          </div>
          <div class="collapse mt-3 me-4 box" id={collapseId}>
            <div className="border-bottom border-end border-start">
              <ul>
                <Link className="email" >{l1}</Link>
                <Link className="email" >{l2}</Link>
                <Link className="email" >{l3}</Link>
                <Link className="email" >{l4}</Link>
                <Link className="email" >{l5}</Link>
                <Link className="email" >{l6}</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
