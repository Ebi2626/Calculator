import React, { Component } from "react";
import BackButton from "./../BackButton";
import Input from "./Input"
import Keyboard from "./Keyboard"
import Result from "./Result"



class AppComplex extends Component {
    constructor(props){
    super(props);
    this.state = {
      currentNumber: 1,
      currentInput: 1,
      Number1: {
        input1: 0,
        input2: 0,
      },
      Number2: {
        input1: 0,
        input2: 0,
      },
      sign: 0,
      result: 0
    }
    this.changeValue = this.changeValue.bind(this);
    this.secondValuer = this.secondValuer.bind(this);
    this.count = this.count.bind(this);
    this.complexCounting = this.complexCounting.bind(this);
    this.trimZero = this.trimZero.bind(this);
  }
  trimZero(num, inp){
    let target = this.state.num.inp;
    if ((target.charAt(0) === 0) || (target.charAt(0) === "0")){
    let targetTrimmed = target.substr(1);
     console.log("TrimZero dostało:"+ num +"i"+ inp);
      this.setState((num, inp)=>{
        return ({
          num: {
            inp: targetTrimmed
          }
        })
      })
    }
  }

  changeValue(e){
    let number = this.state.currentNumber;
    let input = this.state.currentInput;
    let value = e.target.innerHTML;
    let object = "Number"+number;
    let inputTarget = "input"+input;
    this.trimZero(object, inputTarget);
    console.log(value);
    console.log(this.state.Number1.input1);
    if (number === 1){
      if(input === 1) {
        this.setState(prevState => {
          return (
            {
              Number1: {
                input1: prevState.Number1.input1 + "" + value
              }
            }
          )
        }
      )
      } else if (input === 2 ){
        this.setState(prevState => {
          return (
            {
              Number1: {
                input2: prevState.Number1.input2 + "" + value
              }
            }
          )
        }
      )
      } else {
        console.log("Obecna liczba to: " + this.state.currenNumber)
      }
    } else if (number === 2){
      if(input === 1) {
        this.setState(prevState => {
          return (
            {
              Number2: {
                input1: prevState.Number2.input1 + "" + value
              }
            }
          )
        }
      )

      } else if (input === 2 ){
        this.setState(prevState => {
          return (
            {
              Number2: {
                input2: prevState.Number2.input2 + "" + value
              }
            }
          )
        }
      )
      }
    } else {
              console.log("Obecna liczba to: " + this.state.currenNumber);
    }  
    console.log("Current input: "+this.state.currentInput);
    console.log("Current number: "+this.state.currentNumber);
    console.log("Current value: "+this.state.Number1.input1);

  }
  secondValuer(){

  }
  count(){

  }
  complexCounting(){

  }

   render() {
    return (
      <div className="AppComplex">
      <BackButton back={this.props.back}/>
      <h2>Reactowy kalkulator do liczb zespolonych</h2>
      <Input
        inputRE={this.changeValue}
        valueInput1={this.state.valueInput1}
        inputIM={this.changeValue}
        valueInput2={this.state.valueInput2}/>
      <Result value={this.state.result}/>
      <Keyboard function={this.changeValue} currentInput={this.state.currentInput} currentNumber={this.state.currentNumber}/>
      </div>
    );
  }
}

export default AppComplex;
