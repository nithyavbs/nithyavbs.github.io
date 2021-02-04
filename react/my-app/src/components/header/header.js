import React    from "react";
import template from "./header.js";

class Header extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Header;
