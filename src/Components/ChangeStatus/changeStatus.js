import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './changeStatus.css';

const caseProgress = ["Waiting on letter from patron","Active", "On supervisor's desk", "Corrections or Reinvestigate", "On director's desk", "Waiting on patron decision", "Sign and close out", "To be Filed"];

class ChangeStatus extends Component{
  constructor(props){
    super(props);
	this.state ={newStatus:""};  
    this.onSelectStatusChange = this.onSelectStatusChange.bind(this);
	this.submitUpdateStatusClick = this.submitUpdateStatusClick.bind(this);
  }	
	
  //function to create a array of options to be displayed in the select element 	
  displayCaseProgress(){
	  const typeOfProgress = caseProgress.map((progress, index) =>
			<option key={index + 1}  value={progress}>{progress}</option>					  
					);
	  //creates an disable option to be displayed first in the select element. This was a bug fix where the user would select the first element but it wouldn't save it and return a blank
	  const firstProgress = <option key={0} disabled selected>Pick an option</option>;
	  
	  typeOfProgress.unshift(firstProgress);
	  
	  return typeOfProgress;
  }

  //method to update the state with the user choice for the select element	
  onSelectStatusChange(event){
	  event.preventDefault(); //not sure
	  this.setState({newStatus:event.target.value}); 	  
  }
	
  //when the user clicks the submit button, a callback function from the App Component is call. It retrieves the state to be use to update the status of the selected case	
  submitUpdateStatusClick(event){
	  event.preventDefault(); //not sure
	  this.props.submitUpdateStatus(this.state.newStatus);	  
  }	

  render(){
    return(
		<div className="centerPage">
				
			<h3 className="centerAlign whiteColor">Choose a new Status </h3>
		  <div className="row whiteColor">
			<div className="col-xs-5 col-xs-offset-1 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3 col-lg-3 col-lg-offset-3">
				Case number:
		    </div>
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 leftAlign">
				{this.props.caseNumber}
		    </div>		
		  </div>
		  <div className="row whiteColor">
			<div className="col-xs-5 col-xs-offset-1 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3 col-lg-3 col-lg-offset-3">
				Previous Status
		    </div>
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 leftAlign">
				{this.props.caseStatus}
		    </div>		
		  </div>
		  <div className="centerAlign">
				<select onChange={this.onSelectStatusChange}>{this.displayCaseProgress()}</select>
		  </div>
		  <div className="centerAlign">
				<Button bsStyle="success" onClick={this.submitUpdateStatusClick}>Submit</Button>			  
		  </div>	  
  			
		</div>
	);	  
  }
}

export default ChangeStatus;