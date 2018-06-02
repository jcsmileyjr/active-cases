import React from 'react';
import '../Nav/nav.css';

      function InstructionStatus(props){
        return(
          <div className="row instructionsContainer">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h4>Color of Status</h4>
              <p>Blue = Plenty of time</p>
              <p>Yellow  = Running out of time</p>
              <p>Red   = Out of time, finish immediately</p>
            </div>        
          </div>
        );
      }


export default InstructionStatus;