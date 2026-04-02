
//import React from 'react';


function PopUp({showPopUp, closePopUp, children, title}){
  if (!showPopUp) {return null}
  return (
    <div className="PopUp" >
		<div className="Row_10">
			<h3> {title}</h3>
        	<button className="DefaultBtn" onClick={closePopUp}>X</button>
		</div>
        {children}
		
    </div>
  );
};

export default PopUp;