import React from "react";
import { css } from "emotion";

export default function Soccer() {
  return (
    <div
      className={css`
        width: 100%;
        padding: 1rem;
        font-size: 1.5rem;
        h1 {
          font-size: 3rem;
        }
        h2 {
          font-size: 2rem;
        }
      `}
    >
      <h1>The Team I like</h1>
      <div>
        <h2 style={{ textDecoration: "underline" }}>Tottenham Hotspur</h2>
        <div style={{ display: "flex" }}>
          <div>
            <div>Basic Formations: 4-2-3-1</div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center"
              }}
            >
              Kane
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div>Son</div>
              <div>Alli</div>
              <div>Moura</div>
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-around"
              }}
            >
              <div>Winks</div>
              <div>Dier</div>
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div>Vertonghen</div>
              <div>Alderweireld</div>
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div>Lloris(C)</div>
            </div>
          </div>
          <div style={{ marginLeft: "1rem" }}>
            <div>Manager : Jose Mourinho</div>
            <div>Subs : Gazzaniga, Walker Peters, Sissoko, Lo celso</div>
            <div style={{ fontWeight: "bold" }}>
              Premier league 4th(18-19 season)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
