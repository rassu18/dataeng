import React from "react";
import myImage from '../images/home1.jpg';
function DataInside() {
  return (
    <div>
      <div>
        <div className="dataInsideimage">
          <div className="row container textmargin">
            <div className="col-md-6 margintop">
              <p className="dataInsidetextfont">The Reasons Data Modernization Is Essential for Quickening Enterprise Digital Transformation</p>
              <h2 className="dataInsidetextcolor">
              Engineer robust data foundation to drive your business with actionable and accurate insights.
              </h2>
              <div>
                <button className="btn btn-success dataInsidebtn">Schedule a Discussion</button>
            </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="container dataInsidebgcolor">
        <div className="col-md-12 marginclient">
          <h1>How to Target Quick Wins When You Take a New Executive Role</h1>
          <h4>
            Senior IT leaders share how our services helped them win in the
            platform age.
          </h4>
        </div>
      </div>
      <div className="container">
        <div className="col-md-12 mt-4">
          <h2 className="text-center">Difficulties That Today's Organisations Face</h2>
          <h6>
          Globally, organisations are searching for ways to generate data, derive insightful conclusions, and offer flawless dashboards for visual aids. Organisations must overcome the following obstacles, nevertheless, in order to communicate the findings and obtain the appropriate data.
          </h6>
        </div>
      </div>
      <div className="row mt-4 mx-5">
        <div className="col-md-4">
          <h3>Data Engineering</h3>
         <ul>
         <li>combining data from several sources</li>
         <li>Even the big data platform might not be able to manage all of the data.</li>
         <li> upkeep and support for the data pipelines</li>
         <li>Scalability and performance problems</li>
         <li>Issues with accessibility, security, governance, and data quality</li>
         </ul>
        </div>
        <div className="col-md-4">
          <h3>Data Insights</h3>
          <ul>
          <li>Examination issue of paralysis</li>
          <li>Inadequate comprehension of massive data</li>
          <li>Uncertainty in the Data Management Environment</li>
          <li>Quick retrieval of stored data</li>
         </ul>
        </div>
        <div className="col-md-4">
          <h3>Data Visualization</h3>
          <ul>
          <li>Data density and credibility</li>
          <li>Lack of better data visualization literacy</li>
          <li>Navigating through the blind spots of data visualization</li>
          <li>Spoon-feeding complex data in visuals</li>
          <li>Human factors</li>
         </ul>
        </div>
      </div>
      <div className="container">
        <div className="col-md-12 mt-4">
          <h2 className="text-center">Services Provided</h2>
        </div>
      </div>
     <div className="row mt-4 mx-3">
     <div className="col-md-3">
      <div className="card">
  <img src={myImage} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Advisory Services and Consulting</h5>
    <p className="card-text">
      <ul>
        <li>
        Data quality assessment</li>
        <li>Tool evaluation, and building prototypes.</li>
        <li>Data planning and strategy</li>
        <li>AIML strategy</li>
      </ul>
    </p>
  </div>
  </div>
</div>
<div className="col-md-3 ">
      <div className="card">
  <img src={myImage} className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title">Advisory Services and Consulting</h5>
    <p className="card-text">
      <ul>
        <li>
        Data quality assessment</li>
        <li>Tool evaluation, and building prototypes.</li>
        <li>Data planning and strategy</li>
        <li>AIML strategy</li>
      </ul>
    </p>
  </div>
  </div>
</div>
<div className="col-md-3">
      <div className="card">
  <img src={myImage} className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title">Advisory Services and Consulting</h5>
    <p className="card-text">
      <ul>
        <li>
        Data quality assessment</li>
        <li>Tool evaluation, and building prototypes.</li>
        <li>Data planning and strategy</li>
        <li>AIML strategy</li>
      </ul>
    </p>
  </div>
  </div>
</div>
<div className="col-md-3">
      <div className="card">
  <img src={myImage} className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title">Advisory Services and Consulting</h5>
    <p className="card-text">
      <ul>
        <li>
        Data quality assessment</li>
        <li>Tool evaluation, and building prototypes.</li>
        <li>Data planning and strategy</li>
        <li>AIML strategy</li>
      </ul>
    </p>
  </div>
  </div>
</div>

</div> 
 
    </div>
  );
}
export default DataInside;
