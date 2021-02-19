import React from 'react';
import './style.css';

const index = () => {
    return (
    
        <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="./media/mario.jpg" alt="profil-pic" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                            <h5>
                                Babar Leroi
                                    </h5>
                            <h6>
                                Statut du gars
                                    </h6>
                            <p class="proile-rating">CLASSEMENT : <span>⭐⭐⭐⭐⭐</span></p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Modifier profil" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>Liens de travail:</p>
                            <a href="">Linkedin</a><br />
                            <a href="">Github</a><br />
                            <a href="">Google</a>
                            <p></p>

                            <p>Compétences:</p>
                            <a >Compétence1</a><br />
                            <a >Compétenc1</a><br />
                            <a >Compétence1</a><br />
                            <a >Compétence1</a><br />
                        </div>
                    </div>
                    <div>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="tab-javascript" data-toggle="tab"  >Informations</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="tab-css" data-toggle="tab"  >Mes sujets</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="tab-boot" data-toggle="tab"  >Préférences</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="tab-compte" data-toggle="tab"  >Mon compte</a>
                            </li>
                        </ul>
                        <div class="col-md-8">
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" >
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Identifiant utilisateur:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>BabarLeroi</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Nom</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Leroi</p>
                                        </div>
                                        <div class="col-md-6">
                                            <label>Prénom</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Babar</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>babarleroi@gmail.fr</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>06 06 06 06 06</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Métier de Babar</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        
    );
};

export default index;
