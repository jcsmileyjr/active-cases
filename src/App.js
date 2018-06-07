import React, { Component } from 'react';
import './App.css';

import Case from './Components/Case/Case.js';
import Nav from './Components/Nav/nav.js';
import ProgressionList from './Components/ProgressionList/progressionList.js';
import InstructionStatus from './Components/InstructionStatus/instructionStatus.js';
import Instructions from './Components/Instructions/instructions.js';
import CaseTitle from './Components/CaseTitle/caseTitle.js';
/*import ToggleInstruction from './Components/ToggleInstruction/toggleInstruction.js'; */
import InputForm from './Components/InputForm/inputForm.js';
import AddCaseButton from './Components/AddCaseButton/addCaseButton.js';


const cases = [{type:"Dispute", casino:"Horseshoe", patron:"Billy Bob", status:"Waiting on letter from patron", caseNumber:"18-100", startDate:"2018-06-01T17:55:12.583Z", daysUsed:0, daysHaveLeft:0}, {type:"Complaint", casino:"GoldStrike", patron:"Sally Sue", status:"On director's desk", caseNumber:"18-200", startDate:"2018-06-02T17:55:12.583Z", daysUsed:0, daysHaveLeft:0}, {type:"inspection", casino:"Fitz Casino", patron:"Crazy Willy", status:"On supervisor's desk", caseNumber:"18-300", startDate:"2018-06-03T17:55:12.583Z", daysUsed:0, daysHaveLeft:0}];


class CaseManagement extends Component{

  /*FOR TESTING, DELETE BEFORE PRODUCTION
  componentDidMount(){
	  this.checkDates();
  }
	
  */		
 	

  /*tip from https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript */
  /*function to get number of days (daysUsed) since last status change and current date.*/	
  calculateDaysUsed(){
	  
	  /*Get today's date*/
	  const todayDate = new Date();

	  /*loop through each element/object in the cases array calculating the days between the last status change and the current day. This number is assign to the cases daysUsed attribute of cases object.*/
	  cases.forEach(function(files, index){
		 	 
		/*convert the startDate of files from a string into milliseconds*/  
        var currentCaseStartDate = Date.parse(files.startDate);	
		
	  	/*Subtract today's date in milliseconds from startDate in milliseconds. Use the Math function to convert to its absolute value*/
	  	var numberOfMilliseconds = Math.abs(todayDate.getTime() - currentCaseStartDate);			 
	  
	    /*Divide the numberOfMilliseconds varible by a algorithm of a day. Use the Math.ceil function to convert to the smallest number of a given number*/
	    var daysUsed = Math.ceil(numberOfMilliseconds/(1000*3600*24));
		  
		/*assign the number of days used since last status change to current case*/  
	  	cases[index].daysUsed = daysUsed;
	  });
  }	
	
  calculateDaysHaveLeft(){
	  
	  /*based on the current case's status, the daysHaveLeft case's attribute is updated from the daysUsed attribute minus the alloted time to complete the status.*/
	  cases.forEach(function(files, index){
        switch(files.status){
       		case "Waiting on letter from patron":
                cases[index].daysHaveLeft = 30 - files.daysUsed;
				break;
            case "Active":
            	cases[index].daysHaveLeft = 10 - files.daysUsed;
				break;
       		case "On supervisor's desk":
                cases[index].daysHaveLeft = 3 - files.daysUsed;
				break;
            case "Corrections or Reinvestigate":
            	cases[index].daysHaveLeft = 3 - files.daysUsed;
				break;
       		case "On director's desk":
                cases[index].daysHaveLeft = 10 - files.daysUsed;
				break;
            case "Waiting on patron decision":
            	cases[index].daysHaveLeft = 30 - files.daysUsed;
				break;
       		case "Sign and close out":
                cases[index].daysHaveLeft = 3 - files.daysUsed;
				break;
       		case "To be Filed":
                cases[index].daysHaveLeft = 1 - files.daysUsed;
				break;
			default:
				console.log("Error");

                }//end of switch statement
	  
	  });//end of forEach statement
  }	
	
  displayCases(){
	  /* TO DO
		- function to determine Case's color (statusColor) based on daysHaveLeft. Add that color to the case array.
		- Pass statusColor to Case
		- Update App'js App component submitCase() to include new info
	  
	  */
	  /*FINAL GOAL: Pass to each Case a color and remainingDays (which is displayed in a tooltip)*/
	  

	  this.calculateDaysUsed();
	  this.calculateDaysHaveLeft();
	  const caseLoad = cases.map((files, index) =>
								 
		<li className={index % 2 ===0 ? "mainColor":"testColor"} key={files.caseNumber}><Case type={files.type} casino={files.casino} patron={files.patron} status={files.status} daysLeft={files.daysHaveLeft} /></li>					 
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
	
  /*newCase is use to cycle through caseManagment and newCase Component. workLoad loads the array of cases to be use in Case component*/	
  constructor(props){
      super(props);
      this.state = {newCase:true, workLoad:cases};
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
