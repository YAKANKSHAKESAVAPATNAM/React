import React from "react";
import { RotatingLines } from "react-loader-spinner";


const LoaderSpinner = () => {
  return (
    <div className="loader-spinner">
      <RotatingLines
        strokeColor="green"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </div>
  );
};

export default LoaderSpinner;
