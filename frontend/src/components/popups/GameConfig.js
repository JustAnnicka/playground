//This is just what the html would be 6 grid system (6/12 for overal size (mobile/desktop))
//The component is a subgrid of 6 (row one 5/1, row two 3/3, row three 6, row four 3/3)
//Decide weather we use Grid or Flexbox
//import slider components
//import DefaultBtn from "../buttons/DefaultBtn"



export default function GameConfig(){
	return (
			<div className="flexColumn">
		
				<h4>Opponent</h4>
				<div className="Row_10">
					<input className="DefaultBtn" type="button" value="Player"/>
					<input className="DefaultBtn" type="button" value="Computer"/>
				</div>
				
				<div display="none">
					<h4>Computer Difficulty</h4>
					<input type="range" id="difficulty" name="difficulty" min="1" max="5" step="1" ></input>
					<div className="sliderLabels">
						<label> 1 </label>
						<label> 2 </label>
						<label> 3 </label>
						<label> 4 </label>
						<label> 5 </label>
					</div>
				</div>
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
					<input className="DefaultBtn" type="button" value="Standard"/>
					<input className="DefaultBtn" type="button" value="Rounds"/>
				</div>
				<div>
					<h4>Number of rounds</h4>
					<input className="Slider" type="range" id="playerNbr" name="playerNbr" min="5" max="30" step="1"></input>
					<div className="sliderLabels">
						<label> 5 </label>
						<label> 30 </label>
					</div>
				</div>
				<input className="DefaultBtn" type="submit" value="Start Game"></input>
				
		</div>
		)
}
