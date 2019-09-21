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

 

calculate(event, balance, rate, term){
  event.preventDefault()
console.log("test")
 balance = this.state.balance;
 rate = this.state.rate;
 term = this.state.term;
 
  console.log(balance);
  console.log(rate);
  console.log(term);
  var monthlyPay;
  var monthrate;
  var n;
  /*
  if (term == 15){
    n = 15*12;
    term=15;
  }
  else if (term==30)
  {
    n = 30*12;
    term=30;
  }
 */
  monthrate= rate/1200;
  monthlyPay = balance * monthrate / (1 - (Math.pow(1/(1 + monthrate), term)));
 var finalmonthly= monthlyPay/10;
  console.log(monthrate);
  console.log(n);
  /*var getpowof=1+monthrate;
  
  var simplepowval = Math.pow(getpowof, n)
  console.log(simplepowval);
  var numerator, denominator;
  numerator= monthrate*simplepowval;
  denominator= simplepowval-1;
  var bracketvalue = numerator/denominator;
  monthlyPay = bracketvalue*balance;*/
  var outp = finalmonthly.toFixed(2).toString();
console.log(outp);

return(this.setState({output : `$${outp} is your monthly payment`} ))
 
  
  
  
  
}

handleChange(event) {
  console.log(event.target.name, event.target.value)
  //this.setState({balance: event.target.balance, rate: event.target.rate, term: event.target.term});
  this.setState({[event.target.name]: event.target.value})

}

handleClick(){
 console.log('hello')

 //this.setState({e:target.finalmonthly})
}

  render() {
    return (
      <form>
      
      <div className='container'>

      <div className='row'>
        <h3 size="12">Mortgage Calculator</h3>
        <br></br>
        <div>
        <label>Loan Balance      </label>
        <input type= 'number'  name= 'balance' value={this.state.balance} onChange={this.handleChange}></input>
        </div>
        <br></br>
        <div>
        <label>Interest Rate (%)      </label>
        <input type="number" name="rate" step="0.01" value={this.state.rate} onChange={this.handleChange}></input>
        </div>
        <div>
          <br></br>
        <label>Loan Term (yrs)     </label>
            <select name="term" value={this.state.term} onChange={this.handleChange}>
                <option value="15">15</option>
                <option value="30">30</option>        
            </select>
        </div>
        <br></br>
        <div>
          <div>
          <button  value={this.state.output} name="submit" onClick={this.calculate}>Submit</button>
           <div name="output" id="output">{this.state.output}</div>
          </div>
         </div>
  
      </div>
      </div>
    
    </form>
    );
  }
}
