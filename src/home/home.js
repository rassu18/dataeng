import React from "react";
import hero from "../images/hero.jpg";
import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";
function Home() {
  return (
    <div>
      <div>
        <div className="homeimage">
          <div className="row container textmargin">
            <div className="col-md-6 margintop">
              <p className="textfont">Your Data, Our Expertise</p>
              <h2 className="textcolor">
                Powering Businesses through expert Data Engineering
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 marginclient">
          <h1>Client Speak</h1>
          <h4>
            Senior IT leaders share how our services helped them win in the
            platform age.
          </h4>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={hero} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={home1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={home2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Home;
