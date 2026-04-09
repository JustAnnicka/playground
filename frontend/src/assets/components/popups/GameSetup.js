import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/games';

const GameSetup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const config = {
      playerCount: parseInt(formData.get('playerCount')),
      vsComputer: formData.get('vsComputer') === 'true',
      rounds: parseInt(formData.get('rounds'))
    };

    try {
      // Axios automatically handles JSON stringification and parsing
      const response = await axios.post(API_URL, config);
      
      // Access data directly from response.data
      const { gameId } = response.data;

      // Navigate to the game room
      navigate(`/game/${gameId}`);
      
    } catch (err) {
      // Axios provides a structured error object
      if (axios.isAxiosError(err)) {
        // Handle HTTP errors (400, 500, etc.)
        setError(err.response?.data?.error || 'Failed to create game');
      } else {
        // Handle network errors or unexpected issues
        setError('Network error. Please check your connection.');
      }
      console.error("Game creation failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="setup-container">
      <h1>Configure Card Game</h1>
      {error && <p style={{color: 'red'}}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <label>
          Number of Players:
          <input type="number" name="playerCount" min="2" max="8" defaultValue="4" required />
        </label>
        
        <label>
          Play vs Computer?
          <select name="vsComputer">
            <option value="false">Multiplayer</option>
            <option value="true">Vs Computer</option>
          </select>
        </label>

        <label>
          Rounds:
          <input type="number" name="rounds" min="1" defaultValue="5" required />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Start Game'}
        </button>
      </form>
    </div>
  );
};

export default GameSetup;