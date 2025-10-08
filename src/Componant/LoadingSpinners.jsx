import React from 'react';

const LoadingSpinners = () => {
     return (
  <div>

    <div className="radial-progress"
  style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }  } 
  aria-valuenow={70} role="progressbar">70%</div>

<div className="radial-progress"
  style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }  } 
  aria-valuenow={70} role="progressbar">70%</div>
  
  </div> 
     )
}

export default LoadingSpinners;