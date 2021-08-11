import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running">
                        <span>Course à pied</span>
                    </i>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking">
                        <span>Randonnées</span>
                    </i>
                </li>
                <li className="hobby">
                    <i className="fas fa-mountain">
                        <span>Escalade</span>
                    </i>
                </li>
                <li className="hobby">
                    <i className="fab fa-bitcoin">
                        <span><strong>Crypto-monnaies</strong></span>
                    </i>
                </li>
                <li className="hobby">
                    <i className="fas fa-book">
                        <span>Alain Damasio, Isaac Asimov ...</span>
                    </i>
                </li>
            </ul>
        </div>
    );
}

export default Hobbies;