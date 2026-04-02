//import Header from 'Header'
import React, { useState }from 'react';
import './assets/styles/style.css';
import PopUp from  './components/popups/Popup';
import GameConfig from  './components/popups/GameConfig';

function Home() {
	//can write functions or containers here
	const [showPopUp, setShowPopUp] = useState(false)

	const Login = () => {
			console.log("you pressed login")
		};


  return (
	<div  className="grid">

		<div className="grid-top-right">
			<h3>profile</h3>
		</div>
		<div className="grid-top-left">
			<h2>42 Trump</h2>
		</div>
		<div className="grid-center">
			<h1>Ready to discover the Top Trum of 42 Malaga?</h1>
			<button className="DefaultBtn" onClick={Login}> log in</button>
	
			<button className="DefaultBtn" onClick={()=>setShowPopUp(true)}> Start a game</button>
			<PopUp showPopUp={showPopUp} closePopUp={()=>setShowPopUp(false)} title="New game">
					<GameConfig />
          	</PopUp>

		</div>
		<div className="grid-bottom-center ">
			<p><a href="#root" className="grid-sixth"> imprint</a>
			<a href="#root" className="grid-sixth"> data policy</a></p>
		</div>

	</div>
  );
}

export default Home;