import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc.js';

class Rate extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      date: '',
      currencyRate: {}

    }
    this.currency = ['USD', 'RUB', 'SEK', 'PHP'];
  }

getRate = ()=> {
  fetch('https://api.exchangeratesapi.io/latest')
  .then(data => {
    return data.json();
  })
  .then(data => {
    console.log(data);
    this.setState({date:data.date});
    let result = {};
    for(let i=0; i<this.currency.length; i++){
      result[this.currency[i]]=data.rates[this.currency[i]];
    }
    console.log(result);
    this.setState({currencyRate:result});
  })
}
componentDidMount(){
  this.getRate();
}

  render(){
  return (
    <div className="rate">
        <h3> Курс валют на {this.state.date}</h3>
        <div className="flex-container">
            {Object.keys(this.state.currencyRate).map((keyName)=>
            {
            return (<div className="block flex-item" key={keyName}>
            <div className="currency-name">{keyName}</div>
            <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}*</div>
            <div className="currency-out">*Можно купить за 1 евро</div>
            </div> )
          }
          )}
        </div>
        <Calc rate={this.state.currencyRate}/>
     </div>
  );
  }
}

export default Rate;
