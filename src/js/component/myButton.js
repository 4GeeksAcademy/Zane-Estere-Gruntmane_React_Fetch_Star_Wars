import React from "react";

const MyButton = () => (
  <div className="button-wrapper d-flex justify-content-between">
    <a href="#" className="learnMore btn btn-sm btn-outline-secondary">Learn more</a>
    <a href="#" className="favorite btn btn-sm btn-outline-secondary">
      <i className="fa-regular fa-star" style={{ color: "#8f8f8f" }} ></i>
    </a>
  </div>
);

export default MyButton; 
