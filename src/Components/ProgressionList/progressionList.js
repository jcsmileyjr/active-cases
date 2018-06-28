import React from 'react';
import './progressionList.css';

function ProgressionList(props){
  return(
    <div className="row instructionsContainer">
      <div className="col-xs-7 col-sm-4 col-sm-offset-3 col-md-4 col-md-offset-3 col-lg-4 col-slg-offset-3">
        <h4>Progression Key</h4>
      </div>
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 rightAlign">
        <h4># of Days</h4>
      </div>

	  <div className="col-xs-10 col-sm-4 col-sm-offset-3 col-md-4 col-md-offset-3 col-lg-4 col-slg-offset-3">	Waiting on letter from patron</div>
	  <div className="col-xs-2 col-sm-5 col-md-5 col-lg-5">30</div>
	  
	  <div className="col-xs-10 col-sm-4 col-sm-offset-3 col-md-4 col-md-offset-3 col-lg-4 col-slg-offset-3">Active</div>
	  <div className="col-xs-2 col-sm-5 col-md-5 col-lg-5">10</div>
	  
	  <div className="col-xs-10 col-sm-4 col-sm-offset-3 col-md-4 col-md-offset-3 col-lg-4 col-slg-offset-3">On supervisor's desk</div>
	  <div className="col-xs-2 col-sm-5 col-md-5 col-lg-5">3</div>
	  
	  <div className="col-xs-10 col-sm-4 col-sm-offset-3 col-md-4 col-md-offset-3 col-lg-4 col-slg-offset-3">Corrections or Reinvestigate </div>
	  <div className="col-xs-2 col-sm-5 col-md-5 col-lg-5">3</div>
	  
	  <div className="col-xs-10 col-sm-4 col-sm-offset-3 col-md-4 col-md-offset-3 col-lg-4 col-slg-offset-3">On director's desk </div>
	  <div className="col-xs-2 col-sm-5 col-md-5 col-lg-5">10</div>
	  
	  <div className="col-xs-10 col-sm-4 col-sm-offset-3 col-md-4 col-md-offset-3 col-lg-4 col-slg-offset-3">Waiting on patron decision </div>
	  <div className="col-xs-2 col-sm-5 col-md-5 col-lg-5">30</div>
	  
	  <div className="col-xs-10 col-sm-4 col-sm-offset-3 col-md-4 col-md-offset-3 col-lg-4 col-slg-offset-3">Sign and close out</div>
	  <div className="col-xs-2 col-sm-5 col-md-5 col-lg-5">3</div>	  
	  
	  <div className="col-xs-10 col-sm-4 col-sm-offset-3 col-md-4 col-md-offset-3 col-lg-4 col-slg-offset-3">To be file</div>
	  <div className="col-xs-2 col-sm-5 col-md-5 col-lg-5 leftAlign">Delete</div>		  
    </div>  
  );	
}

export default ProgressionList;