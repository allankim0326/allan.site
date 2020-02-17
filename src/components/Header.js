import React from "react";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        height: "12rem",
        alignItems: "center",
        background: "#f902f1"
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#fff" }}>
        &#9733; Hi Im Allan! &#9733;
      </h1>
    </header>
  );
}
