import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styling/style.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Test Web/Desktop App</h1>
        <Link to="/profile" className="linkStyle">Go to the second page</Link>
        <div className="imageStyle">
          <img src="https://sealink.it/wp/wp-content/uploads/2017/07/smtpb-logo-300x225.png"></img>
        </div>
      </div>
    );
  }
}
