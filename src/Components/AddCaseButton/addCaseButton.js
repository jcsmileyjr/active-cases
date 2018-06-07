/*component is in App.js caseManagment's component*/
import React, {Component} from 'react';
import './addCaseButton.css';

class AddCaseButton extends Component{
  constructor(props){
	  super(props);
	  this.onAddNewCaseClick = this.onAddNewCaseClick.bind(this);
  }	
  render(){
    return(
      <div className="row clickNewButton" onClick={this.onAddNewCaseClick}>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <i className="fas fa-plus fa-2x"></i>
        </div>
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 buttenTextSize">
          Click to Add New Case
        </div>      
      </div>
    );
  }	
  
  onAddNewCaseClick(event){
	  event.preventDefault();
	  this.props.openCase();
  }	
}


export default AddCaseButton;