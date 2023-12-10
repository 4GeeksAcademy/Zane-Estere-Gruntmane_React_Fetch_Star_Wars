import React from "react";

const MyButton = () => (
  <div className="button-wrapper d-flex justify-content-between">
    <Link to={`/information/starships/${starship.uid}`}>
      <a href="#" className="learnMore btn btn-sm btn-outline-secondary">Learn more</a>
    </Link>
    <a href="#" className="favorites btn btn-sm btn-outline-secondary">
      <i className="fa-regular fa-star" style={{ color: "#8f8f8f" }} onClick={() => actions.addRemoveFav(props.kind)}></i>
    </a>
  </div>
);

export default MyButton;

