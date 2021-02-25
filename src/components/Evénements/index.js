import React, { Component } from 'react'
import './style.css';

import { connect } from 'react-redux';
import { authControl } from "../../actions/connexion.action"

class ProfilDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.authControl().then(() => {
      if (this.props.isLogged === false) {
        window.location.href = "/";
      }
    }).catch(
      (e) => {
        window.location.href = "/";
      }
    )
  }

  render() {
    return (
      <div class="container emp-profile">
        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img src="./media/babar.jpg" alt="profil-pic" />
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

                <a href="/">Linkedin</a><br />
                <a href="/">Github</a><br />
                <a href="/">Google</a>
                <p></p>

                <p>Compétences:</p>
                <a href="/">Beau</a><br />
                <a href="/">Musclé</a><br />
                <a href="/">Intelligent</a><br />
                <a href="/">Génie</a><br />
              </div>
            </div>
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                      <label>Proffession</label>
                    </div>
                    <div class="col-md-6">
                      <p>Métier de Babar</p>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div class="row">
                    <div class="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div class="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div class="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div class="col-md-6">
                      <p>230</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div class="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div class="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label>Your Bio</label><br />
                      <p>Your detail description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    isLogged: state.connectReducer.isLogged,
    authlevel: state.connectReducer.authlevel
  };
}

function mapDispatchToProps(dispatch) {

  return {
    authControl: none => dispatch(authControl())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilDetails);
