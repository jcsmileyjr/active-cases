import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './inputForm.css';

const caseType = ["Dispute", "Complaint", "Jackpot", "Inspection"];
const caseCasino = ["Horseshoe", "Gold-Strike", "Fitz Casino"];
const caseProgress = ["Waiting on letter from patron","Active", "On supervisor's desk", "Corrections or Reinvestigate", "On director's desk", "Waiting on patron decision", "Sign and close out", "To be Filed"];

class InputForm extends Component{
  constructor(props){
	  super(props);
	  this.state = {type:"Dispute", casino:"Horseshoe", patron:"", status:"Waiting on letter from patron"};
	  this.onInputPatronChange = this.onInputPatronChange.bind(this);
	  this.onSelectTypeChange = this.onSelectTypeChange.bind(this);
	  this.onSelectCasinoChange = this.onSelectCasinoChange.bind(this);
	  this.onSelectStatusChange = this.onSelectStatusChange.bind(this);	 
      this.onSubmitClick = this.onSubmitClick.bind(this);
  }
	
  displayCaseTypes(){
	  const typeOfCases = caseType.map((types, index) =>
			<option key={index} value={types}>{types}</option>						 
					);
	  return typeOfCases;
  }	
	
  displayCaseCasinos(){
	  const typeOfCasinos = caseCasino.map((casino, index) =>
			<option key={index} value={casino}>{casino}</option>					  
					);
	  return typeOfCasinos;
  }
	
  displayCaseProgress(){
	  const typeOfProgress = caseProgress.map((progress, index) =>
			<option key={index} value={progress}>{progress}</option>					  
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
	  	  <select onChange={this.onSelectTypeChange}>{this.displayCaseTypes()}</select>
	    </div>
	  </div>
	  <div className="row spacingBetweenFormInputs">	
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 textColor">
	  	  Choose a casino?
	    </div>
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	  	  <select onChange={this.onSelectCasinoChange}>{this.displayCaseCasinos()}</select>
	    </div>
	  </div>
	  <div className="row spacingBetweenFormInputs">		  
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 textColor">
		  What is the patron name?
	    </div>
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	      <input type="text" size="13" onChange={this.onInputPatronChange} />
	    </div>
	  </div>
	  <div className="row spacingBetweenFormInputs">		  
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 textColor">
	  	  What is the current status of the case?
	    </div>
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	  	  <select onChange={this.onSelectStatusChange}>{this.displayCaseProgress()}</select>
	    </div>
	  </div>
	  <div className="row spacingBetweenFormInputs">		  
	    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 centerAlign">
	  	  <Button className="submitButton" bsStyle="success" onClick={this.onSubmitClick}>Submit</Button>
	    </div>
	  </div>	  
	</div> 	
	
	);	  
  }
		  
  /*method to assign user enter data to the state to be use to create a case*/
  onInputPatronChange(event){
	  event.preventDefault(); //not sure
	  this.setState({patron:event.target.value}); 
  }
  
  /*method to assign user enter data to the state to be use to create a case*/
  onSelectTypeChange(event){
	  event.preventDefault(); //not sure
	  this.setState({type:event.target.value});
  }

  /*method to assign user enter data to the state to be use to create a case*/
  onSelectCasinoChange(event){
	  event.preventDefault(); //not sure
	  this.setState({casino:event.target.value});
  }	 

  /*method to assign user enter data to the state to be use to create a case*/
  onSelectStatusChange(event){
	  event.preventDefault(); //not sure
	  this.setState({status:event.target.value});
  }	 

  /*method to assign user enter data to the state to be use to create a case */
  onSubmitClick(event){
      event.preventDefault();
	  const newWorkLoad = {type:this.state.type, casino:this.state.casino, patron: this.state.patron, status:this.state.status};
	  this.props.updateWorkLoad(newWorkLoad);
	  //IMPORTANT. Use a callback function pass DOWN from parent and return the data (event.target.value) to the parent. 
  }			  
  
}

export default InputForm;