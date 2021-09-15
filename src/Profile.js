import React from "react";
import { Link } from "react-router-dom";

export default class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>This is the second page</h1>
        <Link to="/" className="linkStyle">Go back to home</Link>
        <div className="imageStyle">
          <img src="https://sealink.it/wp/wp-content/uploads/2021/07/Tetras_Logo_draft4-red-3-300x76.png"></img>
        </div>
      </div>
    );
  }
}
