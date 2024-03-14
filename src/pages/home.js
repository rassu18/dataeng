import React from "react";
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
      // <div className="container">
      //   <div className="col-md-12 marginclient">
      //     <h1>Client Speak</h1>
      //     <h4>
      //       Senior IT leaders share how our services helped them win in the
      //       platform age.
      //     </h4>
      //   </div>
      // </div>

      <div className="container-fluid dataInsidebgcolor mt-5">
        <div className="col-md-12 marginclient">
          <h2 className="mx-5">Programmatic Innovation Driven Business Transformation</h2>
          <div className="container mt-4">
           <div className="col-md-4">
           Using our own Programmatic Innovation framework, DigiSite digital engineering services are intended to assist you in moving from "where you are today" to "where you want to go." We bind together the whole software development process, which enables us to give our cooperating organisations a predictable result.

With honesty, reliability, and compassion serving as our guiding principles, we deliver predictable results to the final customer. which serve as the foundation for the digitally resilient businesses we assist our clients in creating.
           </div>
           <div className="col-md-2 mt-4">
                <button className="btn btn-warning dataInsidebtn">Read More</button>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
}
export default Home;
