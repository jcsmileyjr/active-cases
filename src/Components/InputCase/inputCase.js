import React, {Component} from 'react';
import '../SelectCase/selectCase.css';

class InputCase extends Component{
  constructor(props){
	  super(props);
	  this.onInputChange = this.onInputChange.bind(this);
  }
  render(){
	  return(
		<div className="row selectContainer">
		  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 textColor">
		  	What is the patron name?
		  </div>
		  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
			<input type="text" onChange={this.onInputChange} />
		  </div>	  
		</div>  
  );	  
  }

  onInputChange(event){
	  event.preventDefault();	  
	  this.props.updatePatron(event.target.value);
  }	

}

export default InputCase; 