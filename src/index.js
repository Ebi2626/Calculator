import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppCompelx from "./ComplexNumbers/AppComplex.js"

import "./styles.css";
class Application extends React.Component{
  constructor(){
    super();
    this.state = {
      calculatorType: 0
    }
    this.calculatorTyper = this.calculatorTyper.bind(this);
    this.choosingCalculatorType = this.choosingCalculatorType.bind(this);
  }
  calculatorTyper(){

  }
  choosingCalculatorType(){
    if (this.state.calculatorType === 0){

    } else if (this.state.calculatorType === 1) {

    } else {
      console.log("Error");
    }
  }
  render (){
    return(
      <div>
      <h1>Wybierz kalkulator</h1>
      <ul>
      <li>Zwykły</li>
      <li>Liczb zespolonych</li>
      </ul>
      </div>
    )

  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);
