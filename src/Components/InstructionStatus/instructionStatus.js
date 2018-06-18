import React from 'react';
import './instructionStatus.css';

      function InstructionStatus(props){
        return(
          <div className="row instructionsContainer">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h4>Color of Status</h4>
              <p><span className="blueStatusColor"> Blue </span> = Plenty of time</p>
              <p> <span className="yellowStatusColor">Yellow</span>  = Running out of time</p>
              <p> <span className="redStatusColor">Red </span>  = Out of time, finish immediately</p>
            </div>        
          </div>
        );
      }


export default InstructionStatus;