import React from 'react';
import '../Nav/nav.css';

      function InstructionTips(props){
        return(
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			  <h4 className="centerAlign">Tips</h4>
			  <p>Hover over a case to display remaining days</p>	
            </div>
          </div>
        );
      }

export default InstructionTips;