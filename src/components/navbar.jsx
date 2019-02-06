import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <navbar className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="https://google.com">
          Navbar :{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCount}
          </span>
        </a>
      </navbar>
    );
  }
}

export default NavBar;
