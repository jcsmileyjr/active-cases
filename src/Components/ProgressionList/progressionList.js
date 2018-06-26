import React from 'react';
import './progressionList.css';

function ProgressionList(props){
  return(
    <div className="row instructionsContainer">
      <div className="col-xs-7 col-sm-8 col-md-8 col-lg-8">
        <h4>Progression Key</h4>
      </div>
      <div className="col-xs-5 col-sm-4 col-md-4 col-lg-4 rightAlign">
        <h4># of Days</h4>
      </div>
      <div className="col-xs-10 col-sm-8 col-md-8 col-lg-8">
        <p>Waiting on letter from patron</p>
        <p>Active</p>
        <p>On supervisor's desk</p>
        <p>Corrections or Reinvestigate</p>
        <p>On director's desk</p>
        <p>Waiting on patron decision</p>
        <p>Sign and close out</p>
        <p>To be file</p>
      </div>
      <div className="col-xs-2 col-sm-4 col-md-4 col-lg-4">
        <p>30 </p>
        <p>10 </p>
        <p>3 </p>
        <p>3 </p>
        <p>10 </p>
        <p>30 </p>
        <p>3 </p>
        <p>Delete</p>
      </div>          
    </div>  
  );	
}

export default ProgressionList;