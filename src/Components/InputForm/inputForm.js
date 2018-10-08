import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './inputForm.css';

const caseType = ["Dispute", "Complaint", "Jackpot", "Inspection", "Minor", "Revocation", "Crimminal", "Violation"];
const caseCasino = ["Horseshoe", "Gold-Strike", "Fitz Casino", "Roadhouse", "1st Jackpot", "Resorts", "Sam's Town", "Hollywood", "Isle of Capri"];
const caseProgress = ["Waiting on letter from patron","Active", "On supervisor's desk", "Corrections or Reinvestigate", "Judicial process", "Waiting on patron decision", "Sign, Close, and Filed"];

class InputForm extends Component{
  constructor(props){
	  super(props);
	  this.state = {type:"Dispute", casino:"Horseshoe", patron:"", date:"", status:"Waiting on letter from patron"};
	  this.onInputPatronChange = this.onInputPatronChange.bind(this);
	  this.onSelectTypeChange = this.onSelectTypeChange.bind(this);
	  this.onSelectCasinoChange = this.onSelectCasinoChange.bind(this);
	  this.onSelectStatusChange = this.onSelectStatusChange.bind(this);
      this.onSelectDateChange = this.onSelectDateChange.bind(this);
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
		  What is the patron name or case number?
	    </div>
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	      <input type="text" size="13" maxLength="20" onChange={this.onInputPatronChange} />
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
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 textColor">
	  	  What is the start date for the case?
	    </div>
	    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <input type="date" onChange={this.onSelectDateChange} />
	    </div>
	  </div>          
	  <div className="row spacingBetweenFormInputs">		  
	    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 centerAlign">
	  	  <Button className="submitButton" bsStyle="success" disabled={this.state.patron===""} onClick={this.onSubmitClick}>Submit</Button>
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

  /*method to assign user enter data to the state to be use to create a case*/
  onSelectDateChange(event){
	  event.preventDefault(); //not sure
	  this.setState({date:event.target.value});
  }

  /*method to assign user enter data to the state to be use to create a case */
  onSubmitClick(event){
	  const newWorkLoad = {type:this.state.type, casino:this.state.casino, patron: this.state.patron, date:this.state.date, status:this.state.status};
	  this.props.updateWorkLoad(newWorkLoad);
	  //IMPORTANT. Use a callback function pass DOWN from the parent and return the data (event.target.value) to the parent. 
  }			  
  
}

export default InputForm;