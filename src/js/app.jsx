import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props){
    super(props)
    this.state = {balance: '', rate: '', term: 15}
    this.handleChange = this.handleChange.bind(this);
    //this.onChange = this.onChange.bind(this);
    //this.handleCilck = this.handleClick.bind(this);
    this.calculate = this.calculate.bind(this);
  }

 

calculate(){
console.log("test")
  //var monthlyPay, P;
const balance = this.state.balance;
  //balance = (state.balance).value;

 // rate = (this.state.rate).value;
 // term = (this.state.term).value; 
  console.log(balance);
 /*console.log(rate);
  console.log(term);
  var monthrate;
  monthrate= rate/12;
  var n; 
  //n= 12*15 for 15 yrs mortgage or 12*30 for 30 yrs mortgage
  P= balance;
  if(term=15){
    n=12*15;
} 
  else if(term=30){
    n=12.30;
    //var simple = Math.pow((1+monthrate), n)
  } 
  var simple = Math.pow((1+monthrate), n)
  var numerator, denominator;
  numerator= mrate*simple;
  denominator= simple-1;
  var bracketvalue = numerator/denominator;
  monthlyPay = bracketvalue*P;
  //var output = M.toString();
 // return(monthlyPay)
  //this.setState(M: output)
  */
  
}

handleChange(event) {
  //this.setState({balance: event.target.balance, rate: event.target.rate, term: event.target.term});
  this.setState({[event.target.name]: event.target.value})
}

/*handleClick(e){
 this.setState({output: e.target.monthlyPay})
}*/

  render() {
    return (
      <form>
      
      <div className='container'>

      <div className='row'>
        <h3>Mortgage Calculator</h3>
        <div>
        <label>Loan Balance </label>
        <input type= 'number'  name= 'balance' value={this.state.balance} onChange={this.handleChange}></input>
        </div>

        <div>
        <label>Interest Rate (%)</label>
        <input type="number" name="rate" step="0.01" value={this.state.rate} onChange={this.handleChange}></input>
        </div>
        <div>
        <label>Loan Term (yrs) </label>
            <select name="term" value={this.state.term} onChange={this.handleChange}>
                <option value="15">15</option>
                <option value="30">30</option>        
            </select>
        </div>
        <div>
        <button name="submit" onClick={this.calculate}>Submit</button>
        </div>
      
         <div className="col-sm-12" name="output" id="output">${this.state.monthlyPay} is your monthly payment</div>

         </div>
  
      
      </div>
    
    </form>
    );
  }
}
