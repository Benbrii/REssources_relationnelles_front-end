import React from 'react';
import Navigation from '../Components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Ceci est l'accueil de la page</h1>
                    <h2>Réalisé par DEMODE Quentin</h2>
                    <div className="pdf">
                        <a href="./media/Maquette.png" target="_blank">Voir la maquette initiale</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;