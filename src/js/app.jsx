import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props){
    super(props)
    this.state = {balance: 0, rate: 0, term: 15,}
    this.handleChange = this.handleChange.bind(this);
    this.handleCilck = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({balance: event.target.balance, rate: event.target.rate, term: event.target.term});
}

handleClick(e){
  this.setState({output: e.target.M})
}

calculate(){
  var M, P;
  var balance; 
  var term;
  var monthrate;
  monthrate= rate/12;
  var n; 
  //n= 12*15 for 15 yrs mortgage or 12*30 for 30 yrs mortgage
  P= balance;
  var simple = Math.pow((1+monthrate), n)
  var numerator, denominator;
  numerator= mrate*simple;
  denominator= simple-1;
  var bracketvalue = numerator/denominator;
  M = bracketvalue*P;
  var output = M.toString();
  


  if(term=15){
    n=12*15;
    var simple = Math.pow((1+monthrate), n)


  }
  else if(term=30){
    n=12.30;
    var simple = Math.pow((1+monthrate), n)


  } 
}


  render() {
    return (
      
      <div className='container'>

      <div className='row'>
        <h3>Mortgage Calculator</h3>
        <div>
        <label>Loan Balance </label>
        <input type="number"  name="balance" value={this.state.balance} onChange={this.handleChange.bind(this,'balance')}></input>
        </div>

        <div>
        <label>Interest Rate (%)</label>
        <input type="number" name="rate" step="0.01" value={this.state.rate} onChange={this.handleChange.bind(this,'rate')}></input>
        </div>
        <div>
        <label>Loan Term (yrs) </label>
            <select name="term" value={this.state.term} onChange={this.handleChange.bind(this,'term')}>
                <option value="15">15</option>
                <option value="30">30</option>        
            </select>
        </div>
        <div>
        <button name="submit" onClick={this.calculate()}>Submit</button>
        </div>
      
         <div className="col-sm-12" name="output" id="output">Output</div>
            
         </div>
  
        {
          
        }
      </div>
    );
  }
}
