import React, { useState }from 'react';


export default function GameConfig(){
	const [showDifficulty, setDifficulty] = useState(false)
	const [showRounds, setRounds] = useState(false)

	return (
			<div className="flexColumn">
		
				<h4>Opponent</h4>
				<div className="Row_10">
					<input className="DefaultBtn" type="button"  onClick={()=>setDifficulty(false)} value="Player" />
					<input className="DefaultBtn" type="button"  onClick={()=>setDifficulty(true)} value="Computer"/>
				</div>
				{showDifficulty &&(
				<div display="none">
					<h4>Computer Difficulty</h4>
					<input type="range" id="difficulty" name="difficulty" min="1" max="5" step="1" ></input>
					<div className="sliderLabels">
						<label> 1 </label><label> 2 </label><label> 3 </label><label> 4 </label>
						<label> 5 </label>
					</div>
				</div>
				)}
				<div>
				<h4>Number of players</h4>
					<input className="Slider" type="range" id="playerNbr" name="playerNbr" min="2" max="5" step="1" ></input>
					<div className="sliderLabels">
						<label> 2 </label>
						<label> 3 </label>
						<label> 4 </label>
						<label> 5 </label>
				</div>
				</div>
				<h4>Game type</h4>
				<div className="Row_10">
					<input className="DefaultBtn" type="button" onClick={()=>setRounds(false)}  value="Standard"/>
					<input className="DefaultBtn" type="button" onClick={()=>setRounds(true)}  value="Rounds"/>
				</div>
				{showRounds &&(
				<div>
					<h4>Number of rounds</h4>
					<input className="Slider" type="range" id="nbrOfRounds" name="nbrOfRounds" min="5" max="30" step="1"></input>
					
				</div>
				)}
				<input className="DefaultBtn" type="submit" value="Start Game"></input>
				
		</div>
		)
}
