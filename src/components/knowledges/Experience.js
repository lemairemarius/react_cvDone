import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Derniére  formation :</h3>
            <div className="exp1">
                <h4>CDA Niveau II (Concepteur Developpeur d'Applications).</h4>
                <h5>Février - 2020 / Janvier - 2021</h5>
                <p>- Concevoir et développer des composants d'interface utilisateur en intégrant les recommandations de sécurité<br />
                    - Concevoir et développer la persistance des données en intégrant les recommandations de sécurité<br />
                    - Concevoir et developper une application multicouche répartie en intégrant les recommandations de sécurité </p>
            </div>

            <div className="exp-2">
                <h3>Derniére expérience :</h3>
                <h4>Professeur des arts du cirque</h4>
                <h5>Juin - 2017 / juillet - 2020</h5>
                <p>- Initier les éléves aux différentes formes des arts du cirque (théatre,danse...).<br />
                    - Initier les éléves aux activités du cirque (jonglerie, équilibre sur objets...).<br />
                    - Accompagner les éléves dans leurs créations de numéros pour une représentation ou bien l'entrée aux grandes écoles. </p>
            </div>
        </div>
    );
}

export default Experience;