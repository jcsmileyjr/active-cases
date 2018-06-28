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
import ChangeStatus from './Components/ChangeStatus/changeStatus.js';

const cases = [{type:"Dispute", casino:"Horseshoe", patron:"Billy Bob", status:"Waiting on letter from patron", caseNumber:1, startDate:"2018-06-26T17:55:12.583Z", daysUsed:0, daysHaveLeft:0, color:""}, {type:"Complaint", casino:"GoldStrike", patron:"Sally Sue", status:"On director's desk", caseNumber:2, startDate:"2018-06-20T17:55:12.583Z", daysUsed:0, daysHaveLeft:0, color:""}, {type:"inspection", casino:"Fitz Casino", patron:"Crazy Willy", status:"On supervisor's desk", caseNumber:3, startDate:"2018-06-28T17:55:12.583Z", daysUsed:0, daysHaveLeft:0, color:""}];


class CaseManagement extends Component{
	
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
	
  //calculate the daysHaveLeft attribute of each case array element	
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
 
  /*change the color of each case array element displayed as a case based on teh daysHaveLeft attribute*/	
  changeCaseColor(){
	  cases.forEach((files, index) =>{
		if(files.daysHaveLeft===3 || files.daysHaveLeft===4){
			files.color = "warnColor smallScreenSmallerCaseContainers";	//if 3 or 4 days, use a yellowish color
		}else if(files.daysHaveLeft <= 2){
			files.color = "dangerColor smallScreenSmallerCaseContainers";//if less 2, use reddish color	
		}else if(files.daysHaveLeft >5 && (index % 2) === 0 ) {
			files.color = "mainColor smallScreenSmallerCaseContainers";	/*if greater then 5, alternate between two huse of blue*/
		}else
			files.color = "testColor smallScreenSmallerCaseContainers";
			 
	  });
  }	
	
  //function to create a array of <li> to be displayed as cases in the CaseManagment component 	
  displayCases(){	  

	  this.calculateDaysUsed();//calculate the numbers of days since status update
	  this.calculateDaysHaveLeft();//calculate the number of days til status ends
	  this.changeCaseColor();//change color of case background based on days remaining til end of status time allotted.
		  
	  //create an array of Case components as "li" to be displayed in CaseManagement component.
	  const caseLoad = cases.map((files, index) =>
								 
		<li className={files.color} key={files.caseNumber}><Case type={files.type} casino={files.casino} patron={files.patron} status={files.status} daysLeft={files.daysHaveLeft} changeStatus={this.props.openChangeStatus} keys={files.caseNumber} /></li>					 
								);
	  return caseLoad;
  }

    
  render() {
    return (
      <div className="row ">
		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 sectionBorder">
		  <CaseTitle />
		  <div className="fileContainer">
			<ul className="listOfCases ">{this.displayCases()}</ul>
            <AddCaseButton openCase={this.props.openCase} />
		  </div>
		</div>
		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		  <div className="col-xs-12 col-sm-3 col-md-3 col-lg-4">
			 <Instructions />
		  </div>
		  <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
			 <ProgressionList />
		  </div>
		  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-lg-offset-1">
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
	  <div className="row ">
		<InputForm updateWorkLoad={this.props.updateWorkLoad} />
		<ProgressionList />	
	  </div>	
	  
	);  
  }
}


class App extends Component {
	
  /*newCase is use to cycle through caseManagment and newCase Component. workLoad loads the array of cases to be use in Case component. updateStatus is use to load the changeStatus component if true*/	
  constructor(props){
      super(props);
      this.state = {newCase:true, updateStatus:false, workLoad:cases, currentFile:0, currentStatus:""};
	  this.onSubmitCase = this.onSubmitCase.bind(this);
	  this.openNewCaseClick = this.openNewCaseClick.bind(this);
	  this.openChangeStatusClick = this.openChangeStatusClick.bind(this);
	  this.onSubmitUpdateStatus = this.onSubmitUpdateStatus.bind(this);
  }
	
  //callback function used in CaseManagement's AddNewCase component to open the NewCase component based on state.newCase true/false
  openNewCaseClick(){
	  this.setState({newCase:false});
  }
	
  //callback function used in CaseManagement's Case component to open the ChangeStatus component based on this.state.updateStatus true/false. Updates the state currentFile and currentStatus data to display the current case information in the ChangeStatus Component. 
  openChangeStatusClick(fileNumber, newStatus){
	  this.setState({updateStatus:true});
	  this.setState({currentFile:fileNumber});
	  this.setState({currentStatus: newStatus});
  }	
	
  //callback function used in newCase's components to create a new case, add it to the case database, and transfer the view to caseManagement.	
  onSubmitCase(data){
	  var newDate = new Date(); // create a date object for today
	  var dateString = newDate.toJSON();//convert the date into a string
	  var updateCaseNumber = (cases[cases.length - 1].caseNumber) + 1; //retrieve the last case's caseNumber and add one to it
	  cases.push({type:data.type, casino:data.casino, patron:data.patron, status:data.status, caseNumber:updateCaseNumber, startDate:dateString, daysUsed:0, daysHaveLeft:0, color:""}); //update the case's array
	  
	  this.setState({workLoad:cases});//update the state's workload's array
      this.setState({newCase:true});//change the view to the CaseMangement component
 
  }
	
  //callback function used in the ChangeStatus's component to update the user picked case. When the user clicks a case in the CaseManagment component, the caseNumber of the file is saved to the App's component state. When the user choose a status in the ChangeStatus component, it is sent via callback as pickedStatus. The method search the cases array for the file matching the caseNumber. When found, the status and startDate is updated. The user is then switch back to the CaseManagement's component by changing the App's component state's updateStatus to false. 	
  onSubmitUpdateStatus(pickedStatus){
	  let foundFile = 0;
	  cases.forEach((file, index)=>{
		  if(file.caseNumber===this.state.currentFile){
			  foundFile = index;
		  }
	  });//search each file to match with the currentFile saved when the user click on the case
      
      //if need to change, use array.filter to create a new array or use an if statment to insure index is not a -1. A -1 cause the splice to delete from the end of the array automatically.
      if(pickedStatus==="To be Filed"){
          cases.splice(foundFile,1);//remove the current case clicked by user from the array of cases          
      }else{//change the status of the currenet case clicked by the user
          cases[foundFile].status = pickedStatus;//change the status of the matching case to the status sent with the callback function from the ChangeStatus component
          var newDate = new Date(); // create a date object for today
          var dateString = newDate.toJSON();//convert the date into a string
          cases[foundFile].startDate = dateString;//change the date to today
      }
    
      this.setState({updateStatus:false});//change the view to CaseManagment 
        
  }	
	
  render() {
    return (
      <div className="container">
		<Nav className="mainColor" />
        {this.state.newCase && !this.state.updateStatus && <CaseManagement openCase={this.openNewCaseClick} openChangeStatus ={this.openChangeStatusClick} caseFiles={this.state.workLoad} />}
        {!this.state.newCase && !this.state.updateStatus && <NewCase updateWorkLoad={this.onSubmitCase} />}
		{this.state.updateStatus && <ChangeStatus submitUpdateStatus={this.onSubmitUpdateStatus} caseNumber={this.state.currentFile} caseStatus={this.state.currentStatus} />}
      </div>
    );
  }
}

export default App;
