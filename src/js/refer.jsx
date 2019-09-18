<div className='container'>

              <h3>Mortgage Calculator</h3>
              
              <label HTMLfor='loan'>Loan Balance </label>
              <input type="number"  name="balance"></input>
            
          
            <label HTMLfor="loan">Interest Rate (%)</label>
            <input type="number" name="rate" step="0.01">
            
                 
        
            <label for="term">Loan Term (yrs) </label>
        
        
            <select name="term">
                <option value="15">15 yr</option>
                <option value="30">30 yr</option>        
            </select>


        <button name="submit">Submit</button>
      
         <div className="col-sm-12" name="output" id="output">Output</div>
  

        </div>



how do you use this - 

handleChange(event) {
  this.setState({title: event.target.value})
}
render() {
  return <input type=”text” name=”title” value={this.state.title} 
    onChange={this.handleChange.bind(this)}/>
}