import React from 'react';
import './selectCase.css';

function SelectCase(props){
  return(
  	<div className="row selectContainer">
	  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 textColor">
	  {props.Question}
	  </div>
	  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	  	<select>{props.selection}</select>
	  </div>	  
	</div>  
  );
}

export default SelectCase; 