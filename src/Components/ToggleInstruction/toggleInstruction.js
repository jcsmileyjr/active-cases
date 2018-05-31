import React from 'react';
import '../Nav/nav.css';
import './toggleInstruction.css';

function ToggleInstruction(props){
  return(
  	<div className="row instructionsContainer">
	  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 centerAlign">
	  	<h4>Toggle Instructions Section On/Off</h4>
	  	<label className="switch">
	  		<input type="checkbox" />
	  		<span className="slider round "></span>
	  	</label>
	  </div>
	</div>
  );
}

export default ToggleInstruction;