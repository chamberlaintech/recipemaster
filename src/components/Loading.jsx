import React from "react";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loader">
      <RingLoader color="#A68A5B" size={100} />;
    </div>
  );
};

export default Loading;
