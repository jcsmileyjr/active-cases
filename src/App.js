import React, { Component } from 'react';
import './App.css';

import Case from './Components/Case/Case.js';
import Nav from './Components/Nav/nav.js';
import ProgressionList from './Components/ProgressionList/progressionList.js';
import InstructionStatus from './Components/InstructionStatus/instructionStatus.js';
import Instructions from './Components/Instructions/instructions.js';
import CaseTitle from './Components/CaseTitle/caseTitle.js';
import ToggleInstruction from './Components/ToggleInstruction/toggleInstruction.js';
import InputForm from './Components/InputForm/inputForm.js';
import AddCaseButton from './Components/AddCaseButton/addCaseButton.js';


const cases = [{type:"Dispute", casino:"Horseshoe", patron:"Billy Bob", status:"Waiting on letter", caseNumber:"18-100"}, {type:"Complaint", casino:"GoldStrike", patron:"Sally Sue", status:"Director has letter", caseNumber:"18-200"}, {type:"inspection", casino:"Fitz Casino", patron:"Crazy Willy", status:"On supervisor desk", caseNumber:"18-300"}];


class CaseManagement extends Component{

  displayCases(){
	  const caseLoad = cases.map((files, index) =>
			<li className={index % 2 ===0 ? "mainColor":"testColor"} key={files.caseNumber}><Case type={files.type} casino={files.casino} patron={files.patron} status={files.status} /></li>					 
								);
	  return caseLoad;
  }
    
  render() {
    return (
      <div className="row caseManagementForm">
		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 sectionBorder">
		  <CaseTitle />
		  <div className="fileContainer">
			<ul className="listOfCases ">{this.displayCases()}</ul>
            <AddCaseButton openCase={this.props.openCase} />
		  </div>
		</div>
		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 sectionBorder">
		  <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
			 <Instructions />
		  </div>
		  <div className="col-xs-12 col-sm-5 col-md-5 col-lg-6">
			 <ProgressionList />
		  </div>
		  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
			 <InstructionStatus  />
		  </div>		
		</div>	
      </div>
    );
  }    
    
}

class NewCase extends Component{
  constructor(props){
	  super(props);
  }

	
  render(){
	return(	
	  <div className="row newCaseForm">
		<InputForm updateWorkLoad={this.props.updateWorkLoad} />
		<ProgressionList />	
	  </div>	
	  
	);  
  }
}


class App extends Component {
  constructor(props){
      super(props);
      this.state = {newCase:true, workLoad:cases, type:"", casino:"", patron:"", status:"", value:"Tom"};
	  this.onSubmitCase = this.onSubmitCase.bind(this);
	  this.openNewCaseClick = this.openNewCaseClick.bind(this);
  }
	
  //callback function used in CaseManagement's AddNewCase component to open the NewCase component based on state.newCase true/false
  openNewCaseClick(){
	  this.setState({newCase:false});
  }
	
  //callback function used in newCase's components to create a new case, add it to the case database, and transfer the view to caseManagement.	
  onSubmitCase(data){	  
	  cases.push({type:data.type, casino:data.casino, patron:data.patron, status:data.status, caseNumber:"18-400"})
	  this.setState({workLoad:cases});
      this.setState({newCase:true});
  }	
	
  render() {
    return (
      <div className="row">
		<Nav className="mainColor" />
        {this.state.newCase && <CaseManagement openCase={this.openNewCaseClick} caseFiles={this.state.workLoad} />}
        {!this.state.newCase && <NewCase updateWorkLoad={this.onSubmitCase} />}
      </div>
    );
  }
}

export default App;
