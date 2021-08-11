import React from 'react';
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>LEMAIRE Marius</h1>
                    <h2>Concepteur Developpeur d'Applications</h2>
                    <h3>31, Rue Turgot, Amiens, 80080 . 06-40-88-58-02 . lemairemarius@laposte.net </h3>
                    <p className="text">Je suis actuellement en formation CDA (concepteur Developpeur d'Applications) à l'AFPA et je suis à la recherche d'un stage (non rémunéré) pour la période du 04 Octobre 2021 au 04 Janvier 2022.<br /> Je suis quelqu'un de sociable,
                        j'ai déja une expérience du monde du travail qui m'a apporté des qualités professionnelles utiles dans tous les milieux comme :<br /> Le travail en équipe, l'autonomie, le sens de l'organisation, un esprit critique et logique.
                    </p>
                    <div className="pdf">
                        <a href="./media/cvM.pdf" target="_blank">Télécharger CV</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;