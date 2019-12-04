import React, { Component } from "react";

class BackButton extends Component {
  render() {
    return (
      <>
      <button className="back__button" onClick={this.props.back}>Powrót</button>
      </>
    );
  }
}

export default BackButton;
