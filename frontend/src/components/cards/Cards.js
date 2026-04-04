import React, { useState, useEffect} from 'react';
import cardsData from '../../user.json'; // Import the JSON file directly


const Card = ({login, url,  correction_point, wallet, pool_month, pool_year}) => {
 return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '200px' }}>
      <h3 style={{ margin: '10px 0' }}>{login}</h3>
      <img src={url} alt={login} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: '14px', marginTop:'16px'}}>
        <button className="CardBtn"><strong>Wallet:</strong> {wallet}</button>
        <button className="CardBtn"><strong>Pool year:</strong> {pool_month} <span> {pool_year} </span></button>
        <button className="CardBtn"><strong>correction_point:</strong> {correction_point}</button>
      </div>
    </div>
  );
  
};

const CardDeck = () => {
	const [cards, setCards] = useState([]);
  	const [loading, setLoading] = useState(true);

	useEffect(() => {
    // Simulate an API delay to test loading states
    const loadData = async () => {
      setLoading(true);
      
      // Simulate network delay (optional, remove if you want instant load)
      setTimeout(() => {
		console.log("Raw Data Loaded:", cardsData); // <-
        setCards(cardsData); // Assign the imported JSON data
        setLoading(false);
      }, 800); 
    };

    loadData();
  	}, []);
	if (loading) return <p>Loading deck...</p>;

	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
		{/* Map over the array directly. No need for a Deck class wrapper */}
		{cards.map((card) => (
			<Card 
			login={card.login}
			points={card.points} 
			wallet={card.wallet} 
			correction_point={card.correction_point}
			pool_month={card.pool_month}
			pool_year={card.pool_year}
			url={card.image.versions.small} 
			/>
		))}
		</div>
	);

}

export default CardDeck;