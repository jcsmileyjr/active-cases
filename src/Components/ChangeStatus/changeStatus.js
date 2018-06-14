import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './changeStatus.css';

const caseProgress = ["Waiting on letter from patron","Active", "On supervisor's desk", "Corrections or Reinvestigate", "On director's desk", "Waiting on patron decision", "Sign and close out", "To be Filed"];

class ChangeStatus extends Component{
  constructor(props){
    super(props);	  
    this.onSelectStatusChange = this.onSelectStatusChange.bind(this);	  
  }	
	
  displayCaseProgress(){
	  const typeOfProgress = caseProgress.map((progress, index) =>
			<option key={index} value={progress}>{progress}</option>					  
					);
	  return typeOfProgress;
  }
	
  onSelectStatusChange(){
	  console.log("Status updated");
  }	
	
  render(){
    return(
		<div className="centerPage centerAlign">
				
			<h3 className="centerAlign">Choose a new Status for case number: {this.props.caseNumber}</h3>
		  
			<select onChange={this.onSelectStatusChange}>{this.displayCaseProgress()}</select>
			<div>
				<Button bsStyle="success">Submit</Button>
			</div>
  			
		</div>
	);	  
  }
}

export default ChangeStatus;