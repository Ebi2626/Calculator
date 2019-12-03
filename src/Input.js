import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input
          type="text"
          className="input"
          placeholder={this.props.value}
          disabled
        />
      </div>
    );
  }
}

export default Input;
