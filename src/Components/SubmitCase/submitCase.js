import React from 'react';
import '../SelectCase/selectCase.css';
import '../Nav/nav.css';

function SubmitCase(props){
  return(
  	<div className="row">
	  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 centerAlign">
	  	<input className="submitButton" type="submit"/>
	  </div>
	</div>  
  );
}

export default SubmitCase; 