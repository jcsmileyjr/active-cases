import React, {Component} from 'react';
import './case.css';
//changeStatus()


class Case extends Component{
	constructor(props){
	  super(props);
	  this.openChangeStatusClick = this.openChangeStatusClick.bind(this);		
	}
	
	openChangeStatusClick(event){
		event.preventDefault(); //not sure
		this.props.changeStatus(this.props.keys);
	}
	
	render(){
		return (
			<div className="row casesContainer" data-toggle="tooltip" data-placement="top" title={this.props.daysLeft + 1} onClick={this.openChangeStatusClick}>
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					{this.props.type}
				</div>
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					{this.props.casino}
				</div>
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					{this.props.patron}
				</div>
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					{this.props.status}
				</div>
			</div>

		);	  	
	}

}

export default Case; 