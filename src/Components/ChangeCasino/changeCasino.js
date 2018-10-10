import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './changeCasino.css';

const caseCasinos = ["Horseshoe", "Gold-Strike", "Fitz Casino", "Roadhouse", "1st Jackpot", "Resorts", "Sam's Town", "Hollywood", "Isle of Capri"];

class ChangeCasino extends Component{
  constructor(props){
    super(props);
	this.state ={newCasino:caseCasinos[0]};   
  }	
	
  //function to create a array of options to be displayed in the select element 	
  displayCasinoNames(){
	  const casinos = caseCasinos.map((casino, index) =>
			<option key={index + 1}  value={casino}>{casino}</option>					  
					);
	  //creates an disable option to be displayed first in the select element. This was a bug fix where the user would select the first element but it wouldn't save it and return a blank
	  const firstCasino = <option key={0} disabled value="N/A">Pick an option</option>;
	  
      //place the disable option in the first [0] position inside the array
	  casinos.unshift(firstCasino);
	  
	  return casinos;
  }
    
  //method to update the state with the user choice for the select element	
  onSelectCasinoChange = event =>{
	  event.preventDefault(); //not sure
	  this.setState({newCasino:event.target.value}); 	  
  }
	
  //when the user clicks the submit button, a callback function from the App Component is call. It retrieves the state to be use to update the casino name of the selected case	
  submitUpdateCasinoClick = event =>{
	  event.preventDefault(); //not sure      
	  this.props.submitUpdateCasino(this.state.newCasino);	  
  }	  

  render(){
    return(
		<div className="centerPage">				
          <h3 className="centerAlign whiteColor">Choose a new Casino</h3>
		  <div className="row whiteColor">
			<div className="col-xs-5 col-xs-offset-1 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3 col-lg-3 col-lg-offset-3">
				Previous Casino:
		    </div>
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 leftAlign">
				{this.props.caseCasino}
		    </div>		
		  </div>
		  <div className="centerAlign">
				<select onChange={this.onSelectCasinoChange}>{this.displayCasinoNames()}</select>
		  </div>
		  <div className="centerAlign">
				<Button bsStyle="success" onClick={this.submitUpdateCasinoClick}>Submit</Button>			  
		  </div>  			
		</div>
	);	  
  }
}

export default ChangeCasino;