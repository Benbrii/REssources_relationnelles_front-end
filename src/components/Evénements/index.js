import React, { Component } from 'react'
import './style.css';

import { connect } from 'react-redux';
import { authControl } from "../../actions/connexion.action"

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';

class ProfilDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: false,
    }
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

  toggle() {
    const { activeTab } = this.state;
    this.setState({
      activeTab: !activeTab
    })
  }

  render() {
    const { userData } = this.props;
    const { activeTab } = this.state;
    console.log(userData);
    return (
      <div class="container emp-profile">
        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img src="https://res.cloudinary.com/djrdn2vgg/image/upload/v1609166421/santerne-application/users/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey_bptleq.jpg" alt="profil-pic" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <h5>
                  {userData.nom}
                  {' '}
                  {userData.prenom}
                </h5>
                <h6>
                  {
                    userData.authlevel === 1 ? (
                      <div>
                        Utilisateur
                      </div>
                    ) : (
                        <div>
                          Admin
                        </div>
                      )
                  }
                </h6>
                <p class="proile-rating">Email : {userData.email}</p>
              </div>
            </div>
            <div class="col-md-2">
              {/*<input type="submit" class="profile-edit-btn" name="btnAddMore" value="Modifier profil" />*/}
            </div>
          </div>

          <div>
            <Nav tabs>
              <Col sm="6">
                <NavItem>
                  <NavLink
                    className="profil_tabs_link"
                    onClick={() => this.toggle()}
                  >
                    Informations générales
                </NavLink>
                </NavItem>
              </Col>
              <Col sm="6">
                <NavItem>
                  <NavLink
                    className="profil_tabs_link"
                    onClick={() => this.toggle()}
                  >
                    Ressources favorites
                </NavLink>
                </NavItem>
              </Col>
            </Nav>
            <TabContent activeTab={activeTab} className="profil_tab_content_wrapper">
              <TabPane tabId={false}>
                <Row>
                  <Col sm="12">
                    <h4>Informations générales</h4>
                    <div class="row">
                      <div class="col-md-6">
                        <h5>Nom</h5>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.nom}</p>
                      </div>
                      <div class="col-md-6">
                        <h5>Prénom</h5>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.prenom}</p>
                      </div>
                      <div class="col-md-6">
                        <h5>Email</h5>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.email}</p>
                      </div>
                      <div class="col-md-6">
                        <h5>Date de naissance</h5>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.date_de_naissance}</p>
                      </div>
                      <div class="col-md-6">
                        <h5>Ville</h5>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.ville}</p>
                      </div>
                      <div class="col-md-6">
                        <h5>Code postal</h5>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.code_postal}</p>
                      </div>
                      <div class="col-md-6">
                        <h5>Adresse</h5>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.adresse}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={true}>
                <Row>
                  <Col sm="12">
                    <h4>Tab true à faire</h4>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    isLogged: state.connectReducer.isLogged,
    authlevel: state.connectReducer.authlevel,
    userData: state.connectReducer.user
  };
}

function mapDispatchToProps(dispatch) {

  return {
    authControl: none => dispatch(authControl())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilDetails);
