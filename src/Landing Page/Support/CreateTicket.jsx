import React from "react";

function CreateTicket() {
  return (
    
      <div className="row border-bottom" style={{paddingTop:"5vh", paddingLeft:'37vh', paddingRight:'28vh', backgroundColor:'#e2e2e22f'}}>
        <div className="col-10">
          <h2 className="fw-bold">Support Portal</h2>
        </div>
        <div className="col-2">
          <button className="btn btn-primary btn-hover">My tickets</button>
        </div>
        <div className="row">
          <form className="d-flex position-relative" role="search">
            <i class="fa fa-search search-icon" aria-hidden="false"></i>
            <input
              type="search"
              className="form-control search"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
            />
          </form>
        </div>
      </div>
  
  );
}

export default CreateTicket;
