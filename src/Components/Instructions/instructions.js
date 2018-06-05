import React from 'react';
import '../Nav/nav.css';
import './instructions.css';

function Instructions(props){
  return(
	<div className="instructionsContainer">
	  <h3 className="centerAlign"> Instructions</h3>
      <ul className="listOfInstructions">
        <li>The color of the status for each case willl change based on days remaining for a task to be done</li>
        <li>Click the plus icon to create a new case</li>
        <li>Click on a case to update the status</li>
      </ul>
	  <p>Tip: Hover over a case to display remaining days</p>
	</div>  
  );
}

export default Instructions;