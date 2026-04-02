//import Header from 'Header'
import './assets/styles/style.css';

function Home() {
	//can write functions or containers here
  const Login = () => {
	 	console.log("you pressed login")
	  };
  const newGame = () => {
	 	console.log("wanna play?")
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
			<h1>Ready to discover the Top Trump of 42 Malaga?</h1>
			<button className="DefaultBtn" onClick={Login}> log in</button>
			<button className="DefaultBtn" onClick={newGame}> Start a game</button>
		</div>
		<div className="grid-bottom-center ">
			<p><a href="#root" className="grid-sixth">imprint</a>
			<a href="#root" className="grid-sixth"> data policy</a></p>
		</div>

	</div>
  );
}

export default Home;