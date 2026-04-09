import React, { useState }from 'react';
//import CreateGame from '../../../pages/game';
//import { useNavigate } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/games';

const GameConfig = ({showPopUp, closePopUp, title}) => {

	const navigate = useNavigate();
  	const [loading, setLoading] = useState(false);
 	const [error, setError] = useState(null);

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const config = {
      playerCount: parseInt(formData.get('playerNbr')),
      vsComputer: formData.get('vsComputer') === 'true',
      rounds: parseInt(formData.get('rounds'))
    };

    try {
      // Axios automatically handles JSON stringification and parsing
      const response = await axios.post(API_URL, config);
      
      // Access data directly from response.data
      const { gameId } = response.data;
      navigate(`/game/${gameId}`);
      
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // Handle HTTP errors (400, 500, etc.)
        setError(err.response?.data?.error || 'Failed to create game');
      } else {
        setError('Network error. Please check your connection.');
      }
      console.error("Game creation failed:", err);
    } finally {
      setLoading(false);
    }
  }

	const [showDifficulty, setDifficulty] = useState(false)
	const [showRounds, setShowRounds] = useState(false)
	const [rounds, setRounds] =
		React.useState(2);
	if (!showPopUp) {return null}

	return (
		<form className="PopUp" onSubmit={handleSubmit} >
     		 <div className="headerPopup">
        		<h3> {title}</h3>
        	    <button className="ClosePopupBtn" onClick={closePopUp}>X</button>
			</div>
		
			<div className="flexColumn">
				
				<h4>Opponent</h4>
				<div className="Row_10">
					<input className="DefaultBtn" type="button"  id="player" onClick={()=>setDifficulty(false)} value="Player" />
					<input className="DefaultBtn" type="button"  onClick={()=>setDifficulty(true)} value="Computer"/>
				</div>
				{showDifficulty &&(
				<div display="none">
					<h4>Computer Difficulty</h4>
					{error && <p style={{color: 'red'}}>{error}</p>}
					<input type="range" id="difficulty" name="difficulty" min="1" max="5" step="1" ></input>
					<div className="sliderLabels">
						<label> 1 </label><label> 2 </label><label> 3 </label><label> 4 </label>
						<label> 5 </label>
					</div>
				</div>
				)}
				<div>
				<h4>Number of players</h4>
					<input className="Slider" type="range" id="playerNbr" name="playerNbr" min={2} max={5} defaultValue="2" step="1" required></input>
					<div className="sliderLabels">
						<label> 2 </label>
						<label> 3 </label>
						<label> 4 </label>
						<label> 5 </label>
				</div>
				</div>
				<h4>Game type</h4>
				<div className="Row_10">
					<input className="DefaultBtn" type="button" onClick={()=>setShowRounds(false)}  value="Standard"/>
					<input className="DefaultBtn" type="button" onClick={()=>setShowRounds(true)}  value="Rounds"/>
				</div>
				{showRounds &&(
				<div>
					<h4>Number of rounds</h4>
					<p>
						{rounds}
					</p>
					<input className="Slider" type="range" id="nbrOfRounds" name="nbrOfRounds" min={5} max={30} value={rounds} 
						onChange={(event) => {
							setRounds(event.target.value);
						}}
					/>
				</div>
				)}
				<button className="DefaultBtn" type="submit" disabled={loading}>  {loading ? 'Creating...' : 'Start Game'}</button>
					
			</div>
				
      
		</form>
		)
};


export default GameConfig;