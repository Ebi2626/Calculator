import React, { Component } from "react";

class Input extends Component {
  render(props) {
    return (
      <div className="Input">
        <label htmlFor="Re">Re<span className="creative__span" onClick={this.props.inputRE}> </span></label>
        <input
          name="Re"
          type="text"
          className="input"
          placeholder={this.props.valueInput1}
          disabled
        />
        <label htmlFor="Im">Im<span className="creative__span" onClick={this.props.inputIM}> </span></label>
        <input
          name="Im"
          type="text"
          className="input"
          placeholder={this.props.valueInput2}
          disabled
        />
      </div>
    );
  }
}

export default Input;