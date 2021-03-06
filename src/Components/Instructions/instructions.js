import React from 'react';
import './instructions.css';

function Instructions(props){
  return(
	<div className="instructionsContainer">
	  <h3 className="centerAlign"> Instructions</h3>
      <ul className="listOfInstructions">
        <li>The color of the status for each case will change based on days remaining for a task to be done</li>
        <li>Click the plus icon to create a new case</li>
        <li>Click on a case to <span className="blueStatusColor"> update the status</span></li>
	  	<li>Judicial Process includes crimminal, minors, revocation, and disputes going to court</li>
      </ul>
	</div>  
  );
}

export default Instructions;