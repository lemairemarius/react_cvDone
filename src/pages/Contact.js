import React from 'react';
import Navigation from "../components/Navigation";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span> 31 rue Turgot, 80080, Amiens</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="0640885802"><span className="clickInput" onClick={() => {alert("Téléphone copié !")}}> 06-40-88-58-02</span></CopyToClipboard>
                            </li>
                            <li>
                                <i className="far fa-envelope"></i>
                                <CopyToClipboard text="lemairemarius@laposte.net"><span className="clickInput" onClick={() => {alert("E-mail copié !")}}> lemairemarius@laposte.net</span></CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                <div className="socialNetwork">
                    <ul>
                            <a href="https://www.linkedin.com/in/marius-lemaire-53799b200/" target="_blank" rel="noopener noreferrer">
                                <h4>Linkedin</h4>
                                <i className="fab fa-linkedin">
                                </i></a>

                            <a href="https://github.com/lemairemarius" target="_blank" rel="noopener noreferrer">
                                <h4>Github</h4>
                                <i className="fab fa-github">
                                </i>
                            </a>

                            <a href="https://www.facebook.com/marius.lemaire.90" target="_blank" rel="noopener noreferrer">
                                <h4>Facebook</h4>
                                <i className="fab fa-facebook">
                                </i></a>

                            <a href="https://www.linkedin.com/in/marius-lemaire-53799b200/" target="_blank" rel="noopener noreferrer">
                                <h4>CodePen</h4>
                                <i className="fab fa-codepen">
                                </i></a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;