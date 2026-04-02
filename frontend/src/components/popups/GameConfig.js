//This is just what the html would be 6 grid system (6/12 for overal size (mobile/desktop))
//The component is a subgrid of 6 (row one 5/1, row two 3/3, row three 6, row four 3/3)
//Decide weather we use Grid or Flexbox
//import slider components
//import DefaultBtn from "../buttons/DefaultBtn"
export default function GameConfig(){
	return (
			<div>
		
				<h4>Opponent</h4>
				<div className="Row_10">
					<button active className="DefaultBtn Box_5">Player</button>
					<button className="DefaultBtn Box_5">Computer</button>
				</div>
				
				<div display="hidden">
					<h4>Computer Difficulty</h4>
					<div className="Box_6"><p>Difficulty</p><div className="Slider"></div></div>
				</div>
				<div>
					<h4>Number of players</h4>
					<div className="Box_6"><div className="Slider"></div></div>
				</div>
				<h4>Game type</h4>
				<div className="Row_10">
					<button className="DefaultBtn Box_5">Standard</button>
					<button className="DefaultBtn Box_5">Rounds</button>
				</div>
				<div>
					<h4>Number of rounds</h4>
					<div className="Box_6"><div className="Slider"></div></div>
				</div>
				
		</div>
		)
}
