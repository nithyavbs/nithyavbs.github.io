import React    from "react";
import template from "./page.jsx";

class page extends React.Component {
  render() {
    return template.call(this);
  }
}

export default page;
