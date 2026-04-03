
//import React from 'react';


function PopUp({showPopUp, closePopUp, children, title}){
  if (!showPopUp) {return null}
  return (
    <form className="PopUp" >
		<div className="headerPopup">
			<h3> {title}</h3>
        	<button className="ClosePopupBtn" onClick={closePopUp}>X</button>
		</div>
        {children}
		
    </form>
  );
};

export default PopUp;