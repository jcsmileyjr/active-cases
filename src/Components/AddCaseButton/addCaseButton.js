import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './addCaseButton.css';

class AddCaseButton extends Component{
  render(){
    return(
      <div className="row clickNewButton">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <i class="fas fa-plus-circle"></i>
        </div>
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          Click to Add New Case
        </div>      
      </div>
    );
  }	
}


export default AddCaseButton;