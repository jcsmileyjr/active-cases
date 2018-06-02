import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './inputForm.css';

const caseType = ["Dispute", "Complaint", "Jackpot", "Inspection"];
const caseCasino = ["Horseshoe", "Gold-Strike", "Fitz Casino"];
const caseProgress = ["Waiting on letter from patron","Active", "On supervisor's Desk", "Corrections or Reinvestigate", "On director's desk", "Waiting on patron decision", "Sign and close out", "To be filed"];

class InputForm extends Component{
  displayCaseTypes(){
	  const typeOfCases = caseType.map((types) =>
			<option value={types}>{types}</option>						 
					);
	  return typeOfCases;
  }	
	
  displayCaseCasinos(){
	  const typeOfCasinos = caseCasino.map((casino) =>
			<option value={casino}>{casino}</option>					  
					);
	  return typeOfCasinos;
  }
	
  displayCaseProgress(){
	  const typeOfProgress = caseProgress.map((progress) =>
			<option value={progress}>{progress}</option>					  
					);
	  return typeOfProgress;
  }	

  render(){
    return(
  	<div className="row selectContainer">
	  <div className="row spacingBetweenFormInputs">	
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 textColor">
	  	  What is the type of investigation?
	    </div>
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	  	  <select>{this.displayCaseTypes()}</select>
	    </div>
	  </div>
	  <div className="row spacingBetweenFormInputs">	
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 textColor">
	  	  Choose a casino?
	    </div>
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	  	  <select>{this.displayCaseCasinos()}</select>
	    </div>
	  </div>
	  <div className="row spacingBetweenFormInputs">		  
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 textColor">
		  What is the patron name?
	    </div>
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	      <input type="text" />
	    </div>
	  </div>
	  <div className="row spacingBetweenFormInputs">		  
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 textColor">
	  	  What is the current status of the case?
	    </div>
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	  	  <select>{this.displayCaseProgress()}</select>
	    </div>
	  </div>
	  <div className="row spacingBetweenFormInputs">		  
	    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 centerAlign">
	  	  <Button className="submitButton" bsStyle="success">Submit</Button>
	    </div>
	  </div>	  
	</div> 	
	
	);	  
  }
}

export default InputForm;