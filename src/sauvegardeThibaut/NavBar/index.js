import React from 'react'
import img from '../../assets/img/CUBE.png'

const NavBar = ({ onClick }) => (
    <div className="headerNavBar">
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand lienImage" href="/home">
                <img src={img} alt="REsource RElationnelle" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" onClick={() => onClick()} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/home">Accueil<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/profil">Profil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Notifications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Discussions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/registerpage">Connexion</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)
export default NavBar