import React from "react";
import Gif from "../SVGs/vnl.svg";

export default function Spinner(props) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: props.display,
          zIndex: "1000",
          width: "fit-content",
        }}
      >
        <img
          src={Gif}
          alt="Loading..."
          style={{ width: "35vmin", height: "25vmin" }}
        />
      </div>
    </>
  );
}
