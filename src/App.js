import React, { Component } from 'react';
import './App.css';

import Case from './Components/Case/Case.js';
import Nav from './Components/Nav/nav.js';
import ProgressionList from './Components/ProgressionList/progressionList.js';
import InstructionStatus from './Components/InstructionStatus/instructionStatus.js';
import InstructionTips from './Components/InstructionTips/instructionTips.js';
import Instructions from './Components/Instructions/instructions.js';
import CaseTitle from './Components/CaseTitle/caseTitle.js';
import ToggleInstruction from './Components/ToggleInstruction/toggleInstruction.js';
import SelectCase from './Components/SelectCase/selectCase.js';


      const cases = [{type:"Dispute", casino:"Horseshoe", patron:"Billy Bob", status:"Waiting on letter", caseNumber:"18-100"}, {type:"Complaint", casino:"GoldStrike", patron:"Sally Sue", status:"Director has letter", caseNumber:"18-200"}, {type:"inspection", casino:"Fitz Casino", patron:"Crazy Willy", status:"On supervisor desk", caseNumber:"18-300"}];

	  const caseType = ["Dispute", "Complaint", "Jackpot", "Inspection"];
	  const caseCasino = ["Horseshoe", "Gold-Strike", "Fitz Casino"];

class CaseManagement extends Component{

  displayCases(){
	  const caseLoad = cases.map((files, index) =>
			<li className={index % 2 ===0 ? "mainColor":"testColor"} key={files.caseNumber}><Case type={files.type} casino={files.casino} patron={files.patron} status={files.status} /></li>					 
								);
	  return caseLoad;
  }
    
  render() {
    return (
      <div className="row">
		<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 sectionBorder">
		  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
			<Instructions />
			<ProgressionList />	
			<InstructionStatus  />
			<InstructionTips  />
			<ToggleInstruction  />		
		  </div>
		</div>
		<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 sectionBorder">
			<CaseTitle />
		  <div className="fileContainer">
			<ul className="listOfCases ">{this.displayCases()}</ul>
		  </div>
		</div>
      </div>
    );
  }    
    
}

class NewCase extends Component{
  
  displayCaseTypes(){
	  const typeOfCases = caseType.map((types, index) =>
			<option value={types}>{types}</option>						 
					);
	  return typeOfCases;
  }	
	
  render(){
	return(
	  <div className="row">
		<h1>Hello Baby Girl</h1>
		<SelectCase Question="What is the type of investigation?" selection={this.displayCaseTypes()} />
	  </div>	
	);  
  }
}

function Testing(){
    return <p>Testing</p>;
}

class App extends Component {
  constructor(props){
      super(props);
      this.state = {newCase:false};
  }    

	
  render() {
    return (
      <div className="row">
		<Nav className="mainColor" />
        {this.state.newCase && <CaseManagement />}
        {!this.state.newCase && <NewCase />}
      </div>
    );
  }
}

export default App;
