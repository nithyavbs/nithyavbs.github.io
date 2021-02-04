import "./page.css";

import Header from '../header';
import Footer from '../footer';
import React from "react";
import Body from "../body";

function template() {
  return (
    <div className="page">
      <Header></Header>
      <Body></Body>
      <Footer/>
    </div>
  );
};

export default template;
