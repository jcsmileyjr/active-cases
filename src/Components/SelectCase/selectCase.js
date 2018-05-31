import React from 'react';

function SelectCase(props){
  return(
  	<div className="row">
	  <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
	  {props.Question}
	  </div>
	  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
	  	<select>{props.selection}</select>
	  </div>	  
	</div>  
  );
}

export default SelectCase; 