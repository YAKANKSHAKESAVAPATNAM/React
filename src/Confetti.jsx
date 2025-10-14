import React from "react";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  return (
    <>
        <Confetti
        numberOfPieces={200}
        gravity={0.9}
        recycle={true}
        wind={0.05}
        />
    </>
  );
};

export default ConfettiComponent;
