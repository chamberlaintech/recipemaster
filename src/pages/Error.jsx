import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page-section">
      <div className="error-container">
        <h1 className="section-title">Uuupss.... something went wrong</h1>
        <Link to="/" className="btn back-btn">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
