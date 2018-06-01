import React from 'react';
import '../SelectCase/selectCase.css';

function InputCase(props){
  return(
  	<div className="row selectContainer">
	  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 textColor">
	  {props.Question}
	  </div>
	  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	  	<input type="text" />
	  </div>	  
	</div>  
  );
}

export default InputCase; 