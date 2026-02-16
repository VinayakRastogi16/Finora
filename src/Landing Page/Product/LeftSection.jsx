import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  tryD,
  learn,
  imageLink,
  ms
}) {
  return (
    <div className="container-lg mt-5">
      <div className="row mt-5 ">
        <div className="col-6 ms-5 ">
          <a href={imageLink}><img src={imageUrl} className={ms} alt="" /></a>
        </div>
        <div className="col-1"></div>
        <div className="col-4 mt-5">
          <h1 className="fs-2 mb-5">{productName}</h1>
          <p>{productDescription}</p>
          <p className="lh-lg"><a href={tryDemo} className="email fw-bold pb-2 pe-5">{tryD}</a> &nbsp;&nbsp;&nbsp;
          <a href={learnMore} className="email fw-bold pb-2 ps-2">{learn}</a> <br /><br />
          <a href={googlePlay} className="email"><img src="media/images/googlePlayBadge.svg" alt="" /></a> &nbsp; &nbsp;&nbsp;
          <a href={appStore} className="email"><img src="media/images/appstoreBadge.svg" alt="" /></a></p>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
