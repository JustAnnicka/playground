//import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './assets/styles/style.css';
import Home from './pages/home'
import DataPolicy from './pages/data-privacy'
import Imprint from './pages/imprint'
import GameRoom from './assets/components/GameRoom';

/* const apiCall = () => {
  axios.get('http://localhost:3000').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
} */

function Header(){
	return(
		<nav className='Header'>
        <Link to="/">logo</Link>
        <Link to="/">profile</Link>
    </nav>
	)
}
function Footer(){
	return(
		<nav className='Footer'>
        <Link to="/data-policy"> data policy</Link> {" "}
        <Link to="/imprint">imprint</Link>
    </nav>
	)
}

function App() {
  return (
    <BrowserRouter>
      <div className='flexColumn'>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-policy" element={<DataPolicy />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/game/:gameId" element={<GameRoom />} />
       </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
