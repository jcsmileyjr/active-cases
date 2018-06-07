import React from 'react';
import './case.css';

function Case(props){
	return (
		<div className="row casesContainer" data-toggle="tooltip" data-placement="top" title={props.daysLeft}>
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				{props.type}
			</div>
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				{props.casino}
			</div>
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				{props.patron}
			</div>
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				{props.status}
			</div>
		</div>
	
	);
}

export default Case; 