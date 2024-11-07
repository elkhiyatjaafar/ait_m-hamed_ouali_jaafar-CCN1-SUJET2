import React,{useState} from 'react';
import VoitureItem from './VoitureItem';
import "./style.css" 
const VoitureList = () => {
    const [voitures, setVoitures] = useState( [
        {
            
            marque: 'Mercedes A Class',
            image: 'image1.jpg',
            carburant: 'Essence',
            prixAchat: 200000,
        },
        {
            
            marque: 'Audi A1',
            image: 'image2.jpg',
            carburant: 'Essence',
            prixAchat: 180000,
        },
        {
            
            marque: 'BMW 2er Gran Tourer',
            image: 'image3.jpg',
            carburant: 'Essence',
            prixAchat: 220000,
        },
        {
           
            marque: 'Chevrolet Camaro',
            image: 'image4.jpg',
            carburant: 'Essence',
            prixAchat: 210000,
        },
      ]);
      const deleteVoiture = (matricule) => {
        setVoitures((prevVoitures) => 
            prevVoitures.filter((voiture) => voiture.matricule !== matricule)
        );
    };
    const totalVoitures = voitures.length;

    const countByMarque = voitures.reduce((acc, voiture) => {
        acc[voiture.marque] = (acc[voiture.marque] || 0) + 1;
        return acc;
    }, {});
    const voitureMax = voitures.reduce((max, voiture) => {
        return (voiture.prixAchat > max.prixAchat) ? voiture : max;
    }, voitures[0]);

    return (
        <div className="voiture-list">
            <h1>Liste des Voitures</h1>
            <div className="voitures-list">
                {voitures.map((voiture, index) => (
                    <VoitureItem key={index} {...voiture}  deleteVoiture={deleteVoiture}/>
                ))}
            </div>
            <h2>Total des voitures: {totalVoitures}</h2>
            <h3>Nombre de voitures par marque:</h3>
            <ul>
                {Object.entries(countByMarque).map(([marque, count]) => (
                    <li key={marque}>{marque}: {count}</li>
                ))}
            </ul>
            <h3>Voiture avec le prix maximal:</h3>
            <VoitureItem {...voitureMax} />
        </div>
    );
};

export default VoitureList;