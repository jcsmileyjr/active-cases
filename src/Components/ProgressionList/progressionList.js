import React from 'react';
import './progressionList.css';

function ProgressionList(props){
  return(
    <div className="instructionsContainer">
      <div className="col-xs-7 col-sm-8 col-md-8 col-lg-8">
        <h4>Progression Key</h4>
      </div>
      <div className="col-xs-5 col-sm-4 col-md-4 col-lg-4 rightAlign">
        <h4># of Days</h4>
      </div>

	  <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">	Waiting on letter from patron</div>
	  <div className="col-xs-2 ">30</div>
	  
	  <div className="col-xs-10 ">Active</div>
	  <div className="col-xs-2 ">10</div>
	  
	  <div className="col-xs-10 ">On supervisor's desk</div>
	  <div className="col-xs-2 ">3</div>
	  
	  <div className="col-xs-10 ">Corrections or Reinvestigate </div>
	  <div className="col-xs-2 ">3</div>
	  
	  <div className="col-xs-10 ">On director's desk </div>
	  <div className="col-xs-2 2">10</div>
	  
	  <div className="col-xs-10 ">Waiting on patron decision </div>
	  <div className="col-xs-2 ">30</div>
	  
	  <div className="col-xs-10">Sign and close out</div>
	  <div className="col-xs-2 ">3</div>	  
	  
	  <div className="col-xs-10 ">To be file</div>
	  <div className="col-xs-2 leftAlign">Delete</div>		  
    </div>  
  );	
}

export default ProgressionList;