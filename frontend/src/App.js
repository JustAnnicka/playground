import axios from 'axios';
import Home from './Home'
import './App.css';


function App() {
  const apiCall = () => {
      axios.get('http://localhost:8080').then((data) => {
        console.log(data)
      });
  }

  return (
    <div className="App">
      <Home />
      <header className="App-header">
        <button className="DefaultBtn" onClick={apiCall}> Make API Call </button>
      </header>
    </div>
  );
}

export default App;
