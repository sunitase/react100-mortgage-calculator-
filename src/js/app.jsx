import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props){
    super(props)
    this.state = {balance: 0, rate: 0, term: 15, output: ''}
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.calculate = this.calculate.bind(this);
  }

 

calculate(){
 const balance = this.state.balance;
 const rate = this.state.rate;
 const term = this.state.term;
  var monthlyPay;
  var monthrate;
  var n;
  if (term == 15){n = 15*12;}
  else if (term==30){n = 30*12;}
  monthrate= rate/1200;
  monthlyPay = (balance*(monthrate*Math.pow(1+monthrate,n)))/(Math.pow(1+monthrate,n)-1);
  var TotalPay = monthlyPay*n;
  var outp = monthlyPay.toFixed(2).toString();
  //return(this.setState({output : `${outp} is your monthly payment`} )) 
  return(this.setState({output : `Your monthly payment is ${outp}`} )) 
}

  handleChange(event) {
  console.log(event.target.name, event.target.value)
  this.setState({[event.target.name]: event.target.value})

}

handleClick(e){
e.preventDefault() 
let calculate = this.calculate();
}

  render() {
    return (

    
      <form className="form-horizontal">
      <div classNameName="container">
      <h3>Mortgage Calculator</h3>
      <br></br>
      <div className="row">
      <div className="col-sm-3">
          <label HTMLfor="loan">Loan Balance </label>
      </div>
      <div className="col-sm-9">
          <input type= 'number'  name= 'balance' value={this.state.balance} onChange={this.handleChange}></input>
          <br></br>
      </div>
      </div>
      <div className="row">
          <div className="col-sm-3">
          <label HTMLfor="loan">Interest Rate (%)</label>
          </div>
          <div className="col-sm-9">
          <input type="number" name="rate" step="0.01" value={this.state.rate} onChange={this.handleChange}></input>
          
          </div>
  
          <div className="col-sm-3">
          <label for="term">Loan Term (yrs) </label>
           </div>
          <div className="col-sm-9">
          <select name="term" value={this.state.term} onChange={this.handleChange}>
              <option value="15">15 yr</option>
              <option value="30">30 yr</option>        
          </select>
          </div>
          <br></br>
          <div className="col-sm-12">
          <button value={this.state.output} name="submit" onClick={this.handleClick}>Calculate</button>
          <div className="col-sm-12" name="output" id="output">{this.state.output}</div>
          </div>
      </div>
      </div>
  </form>
  );
  }
}




    