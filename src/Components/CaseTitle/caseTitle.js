import React from 'react';

      function CaseTitle(props){
        return (
               <div className="row caseTitleColor casesContainer"> 
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><h3>Type</h3></div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><h3>Casino </h3></div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><h3>Patron </h3></div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><h3>Status </h3></div>
               </div> 
        );
      }

export default CaseTitle;