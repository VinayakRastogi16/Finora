import React from 'react'


function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
  learn,
  mt,
  pt
}) {

  return (
    <div className="container-lg mt-5">
      <div className="row mt-5 ">
        <div className="col-4 ps-5 mt-5 pt-5">
          <h1 className="fs-2 mb-5 mt-4 pt-5 ms-2">{productName}</h1>
          <p className='ms-2'>{productDescription}</p>
          
          <a href={learnMore} className="email fw-bold pb-2 ps-2">{learn}</a> <br /><br />
        </div>
        <div className="col-1"></div>
        <div className="col-6 ms-5 ps-5">
          <img src={imageUrl} className={mt} alt="" />
        </div>
        
        
      </div>
    </div>
  );

}

export default RightSection;