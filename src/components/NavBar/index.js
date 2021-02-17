import React from 'react'
import img from '../../assets/img/CUBE.png'
import './style.css'

const NavBar = () => (
    <div className="headerNavBar">
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand lienImage" href="/">
                <img src={img} alt="REsource RElationnelle" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Accueil<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/profil">Profil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Notifications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Discussions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/connexionPage">Connexion</a>
                    </li>
                    
                </ul>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Recherche" />
                    </form>
                </div>
            </div>
        </nav>
    </div>
)
export default NavBar