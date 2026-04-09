 // Import the JSON file directly


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


export default Card;