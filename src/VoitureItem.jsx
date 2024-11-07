import React, { useState } from 'react';

const VoitureItem = ({ marque, image, carburant, prixAchat, deleteVoiture }) => {
    const [filter, setFilter] = useState('none');

    const changeFilter = () => {
        if (filter === 'none') {
            setFilter('grayscale(100%)');
        } else {
            setFilter('none'); 
        }
    };

    return (
        <div className="voiture-item">
            <img src={image} alt={`Voiture ${marque}`} style={{ width: '150px', height: 'auto', filter: filter }} />
            <h3>{marque}</h3>
            
            <p>Carburant: {carburant}</p>
            <p>Prix d'achat: {prixAchat} MAD</p>
            <button onClick={changeFilter}>Change Couleur</button> 
            <button onClick={() => deleteVoiture(marque)}>Delete</button>
        </div>
    );
};

export default VoitureItem;
