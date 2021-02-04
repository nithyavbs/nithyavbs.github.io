import React    from "react";
import template from "./body.jsx";

class Body extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Body;
