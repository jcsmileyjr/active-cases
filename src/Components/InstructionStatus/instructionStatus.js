import React from 'react';
import './instructionStatus.css';

      function InstructionStatus(props){
        return(
          <div className="row instructionsContainer">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h4>Color of Status</h4>
              <p><span className="blueStatusColor"> Blue </span> = 5 or more days remaining</p>
              <p> <span className="yellowStatusColor">Yellow</span>  = 3-4 days remaining or TBD</p>
              <p> <span className="redStatusColor">Red </span>  = 2 or less days remaining</p>
            </div>        
          </div>
        );
      }


export default InstructionStatus;