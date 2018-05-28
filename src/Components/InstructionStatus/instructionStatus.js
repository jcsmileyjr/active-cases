import React from 'react';

      function InstructionStatus(props){
        return(
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <h4>Color of Status</h4>
              <p>Black</p>
              <p>Blue</p>
              <p>Red</p>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <h4>Means</h4>
              <p>Plenty of time</p>
              <p>Running out of time</p>
              <p>Out of time, finish immediately</p>
            </div>          
          </div>
        );
      }


export default InstructionStatus;