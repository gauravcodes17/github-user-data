import React from "react";

const styling = {
    textAlign: "center",
    fontSize: "30px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
}

const Loading = () => {
  return (
    <div
      className="text-white"
      style={styling}
    >
      Loading...
    </div>
  );
}

export default Loading;
