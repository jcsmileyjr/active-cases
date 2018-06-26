import React, {Component} from 'react';
import './case.css';

class Case extends Component{
	constructor(props){
	  super(props);
	  this.openChangeStatusClick = this.openChangeStatusClick.bind(this);		
	}
	
	//method called when the user clicks on a case in the CaseManagement's component. It calls a callback function from the App's container component and pass on the current case's key. This key is use in a App's method to change the status of the seleted case.
	openChangeStatusClick(event){
		event.preventDefault(); //not sure
		this.props.changeStatus(this.props.keys, this.props.status);
	}
	
	render(){
		return (
			<div className="row casesContainer centerCaseInfo" data-toggle="tooltip" data-placement="top" title={"Days remaining til due: " + (this.props.daysLeft + 1)} onClick={this.openChangeStatusClick}>
				<div className="hidden-xs col-sm-3 col-md-3 col-lg-3">
					{this.props.type}
				</div>
				<div className="hidden-xs col-sm-3 col-md-3 col-lg-3">
					{this.props.casino}
				</div>
				<div className="hidden-xs col-sm-3 col-md-3 col-lg-3">
					{this.props.patron}
				</div>
				<div className="hidden-xs col-sm-3 col-md-3 col-lg-3">
					{this.props.status}
				</div>


				<div className="col-xs-3 hidden-sm hidden-md hidden-lg">
					<strong>Type:</strong>
				</div>
				<div className="col-xs-9 hidden-sm hidden-md hidden-lg">
					{this.props.type}
				</div>
				<div className="col-xs-3 hidden-sm hidden-md hidden-lg">
					<strong>Casino:</strong>
				</div>
				<div className="col-xs-9 hidden-sm hidden-md hidden-lg">
					{this.props.casino}
				</div>
				<div className="col-xs-3 hidden-sm hidden-md hidden-lg">
					<strong>Patron:</strong>
				</div>
				<div className="col-xs-9 hidden-sm hidden-md hidden-lg">
					{this.props.patron}
				</div>
				<div className="col-xs-3 hidden-sm hidden-md hidden-lg">
					<strong>Status:</strong>
				</div>
				<div className="col-xs-9 hidden-sm hidden-md hidden-lg">
					{this.props.status}
				</div>

				<div className="col-xs-12 hidden-sm hidden-md hidden-lg smallScreenDaysRemaining">
					<p>Days remaining til due: {this.props.daysLeft + 1}.</p>
				</div>
			</div>


		);	  	
	}

}

export default Case; 