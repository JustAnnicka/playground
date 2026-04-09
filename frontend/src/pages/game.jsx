import React, { useState, useEffect} from 'react';
import cardsData from '../user.json';

import Card from '../assets/components/cards/Cards'



export default function CreateGame (data){
	const [cards, setCards] = useState([]);
  	const [loading, setLoading] = useState(true);

	useEffect(() => {
    // Simulate an API delay to test loading states
    const loadData = async () => {
      setLoading(true);
      
    
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