import React from "react";

export default function Loader() {

  return Array(12)
    .fill("")
    .map(() => (
      <div
        style={{
          width: "200px",
          display: "inline-block",
          right: "4px",
          width: "200px",
          padding: "8px",
          marginLeft: "10px",
          marginBottom: "10px",
          height: "260px",
          flexWrap: "wrap",
          backgroundColor: '#E8E8E8',
        }}
      ></div>
    ));
}
