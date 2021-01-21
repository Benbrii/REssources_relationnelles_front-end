import React from 'react'
import imgMinistere_interieur from '../../assets/img/Ministere_interieur.png'
import imgHDF from '../../assets/img/region-hauts-de-france.svg'
import imgcriseUp from '../../assets/img/crise-up.jpg'

import './style.css'

const Footer = () => (
    <div className="footer">
        <footer className="page-footer blue text-center text-md-left mt-0">
            <hr />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="title mb-3">Nos soutient</h5>
                        <div className="grind">
                            <div className="blockSupport">
                                <a href="https://www.interieur.gouv.fr"><img className="imgSupport" src={imgMinistere_interieur} alt="imgMinistere_interieur" /></a>
                                <p>Le ministère de l'interieur</p>
                            </div>
                            <div className="blockSupport2">
                                <a href="https://www.hautsdefrance.fr"><img className="imgSupport" src={imgHDF} alt="imgHDF" /></a>
                                <p>La région Haut-De-France</p>
                            </div>
                            <div className="blockSupport3">
                                <a href="https://www.crise-up.com"><img className="imgSupport" src={imgcriseUp} alt="imgcriseUp" /></a>
                                <p>Institut International de Gestion des Crises Humaines</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5 className="title mb-3">Mention légal</h5>
                        <ul>
                            <li><a href="/">Données personnelles et cookies</a></li>
                            <li><a href="/">Confidentialité</a></li>
                            <li><a href="/">Condition général</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container-fluid">
                    <p>REsource RElationnelles & CO © 2021</p>
                </div>
            </div>
        </footer>
    </div>
)
export default Footer