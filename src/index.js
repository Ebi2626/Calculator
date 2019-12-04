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
    this.back = this.back.bind(this);
    this.calculatorTyperComplex = this.calculatorTyperComplex.bind(this);
    this.calculatorTyperNormal = this.calculatorTyperNormal.bind(this);
    this.choosingCalculatorType = this.choosingCalculatorType.bind(this);
  }
  back(){
    this.setState({
      calculatorType: 0  
    })
  }
  calculatorTyperNormal(){
    this.setState({
      calculatorType: 1
    })
  }
  calculatorTyperComplex(){
    this.setState({
      calculatorType: 2
    })
  }
  choosingCalculatorType(){
    if (this.state.calculatorType === 1){
      return (
      <App back={this.back} />
      )

    } else if (this.state.calculatorType === 2) {
         return (
      <AppCompelx back={this.back} />
      )
    } else {
       return (
      <>
      <h1>Wybierz kalkulator</h1>
      <ul>
      <li className="choosing" onClick={this.calculatorTyperNormal}>Zwykły</li>
      <li className="choosing" onClick={this.calculatorTyperComplex}>Liczb zespolonych</li>
      </ul>
      </>
      )
    }
  }
  render (){
    let apka = this.choosingCalculatorType();
    return(
      <div>
        {apka}
      </div>
    )

  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);
