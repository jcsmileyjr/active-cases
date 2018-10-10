import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './changeName.css';

class ChangeName extends Component{
  constructor(props){
    super(props);
	this.state ={newName:""};   
  }	
    
  //method to update the state with the user input
  onNameChange = event =>{
	  event.preventDefault(); //not sure
	  this.setState({newName:event.target.value}); 	  
  }
	
  //when the user clicks the submit button, a callback function from the App Component is call. It retrieves the state to be use to update the patron's name of the selected case	
  submitUpdateNameClick = event =>{
	  event.preventDefault(); //not sure      
	  this.props.submitUpdateName(this.state.newName);	  
  }	  

  render(){
    return(
		<div className="centerPage spaceBetweenComponents">				
          <h3 className="centerAlign whiteColor">Choose a new Name</h3>
          <div className="centerAlign whiteColor">
				Previous: 
		  </div>
          <div className="centerAlign whiteColor">
				{this.props.caseName}
		  </div>         
		  <div className="centerAlign">
                <input type="text" size="13" maxLength="20" onChange={this.onNameChange} />
		  </div>
		  <div className="centerAlign">
				<Button bsStyle="success" onClick={this.submitUpdateNameClick}>Submit</Button>		  
		  </div>  			
		</div>
	);	  
  }
}

export default ChangeName;