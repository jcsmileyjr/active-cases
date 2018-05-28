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


      const cases = [{type:"Dispute", casino:"Horseshoe", patron:"Billy Bob", status:"Waiting on letter", caseNumber:"18-100"}, {type:"Complaint", casino:"GoldStrike", patron:"Sally Sue", status:"Director has letter", caseNumber:"18-200"}, {type:"inspection", casino:"Fitz Casino", patron:"Crazy Willy", status:"On supervisor desk", caseNumber:"18-300"}];

class CaseManagement extends Component{

  displayCases(){
	  const caseLoad = cases.map((files) =>
			<li key={files.caseNumber}><Case type={files.type} casino={files.casino} patron={files.patron} status={files.status} /></li>					 
								);
	  return caseLoad;
  }
    
  render() {
    return (
      <div className="row">
		<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 sectionBorder">
		  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
			<Instructions className="instructionsContainer mainColor" />
			<ProgressionList className="instructionsContainer mainColor" />	
			<InstructionStatus className="instructionsContainer mainColor" />
			<InstructionTips className="instructionsContainer mainColor" />
			<ToggleInstruction className="instructionsContainer mainColor" />		
		  </div>
		</div>
		<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 sectionBorder">
			<CaseTitle />
			<ul className="listOfCases ">{this.displayCases()}</ul>
		</div>
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
      this.state = {newCase:true};
  }    

	
  render() {
    return (
      <div className="row">
		<Nav className="mainColor" />
        {this.state.newCase && <CaseManagement />}
        {!this.state.newCase && <Testing />}
      </div>
    );
  }
}

export default App;
