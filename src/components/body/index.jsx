import React from "react";
import "./index.css";
import Navbar from "../navbar";
import Content from "../content";

function Body({ showMe, score }) {
  return (
    <section className="body">
      <Navbar />
      <Content showMe={showMe} score={score} />
    </section>
  );
}

export default Body;
