import React, { Component } from 'react'
import './style.css';

import { connect } from 'react-redux';
import { authControl } from "../../actions/connexion.action";
import { getFavorisByUserId, getRessource } from "../../actions/ressource.action";

import { IoIosStar } from 'react-icons/io';

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Card, CardBody, CardTitle, Alert } from 'reactstrap';

class ProfilDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: false,
    }
  }

  componentDidMount() {
    this.props.getRessource();
  }

  toggle() {
    const { userData } = this.props;
    let uId = userData.id;
    const { activeTab } = this.state;
    
    this.setState({
      activeTab: !activeTab
    })

    if (uId !== undefined) {
      
      this.props.getFavorisByUserId(uId);
    } else {
      return null
    }
  }

  render() {
    const { userData, favoris, userRessources } = this.props;
    const { activeTab } = this.state;
    let uId = userData.id;
    let listUserRessources = [];

    
    if (userRessources.length > 0){
      listUserRessources = userRessources.filter((ressource) => {
        if (ressource.id_compte === uId) {
          return ressource
        } else {
          return null
        }
      })
      
    }

    return (
      <div>
        <div className="container emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img src="https://res.cloudinary.com/djrdn2vgg/image/upload/v1609166421/santerne-application/users/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey_bptleq.jpg" alt="profil-pic" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
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
                  <p className="proile-rating">Email : {userData.email}</p>
                </div>
              </div>
              <div className="col-md-2">
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
                      <div className="row">
                        <div className="col-md-6">
                          <h5>Nom</h5>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.nom}</p>
                        </div>
                        <div className="col-md-6">
                          <h5>Prénom</h5>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.prenom}</p>
                        </div>
                        <div className="col-md-6">
                          <h5>Email</h5>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.email}</p>
                        </div>
                        <div className="col-md-6">
                          <h5>Date de naissance</h5>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.date_de_naissance}</p>
                        </div>
                        <div className="col-md-6">
                          <h5>Ville</h5>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.ville}</p>
                        </div>
                        <div className="col-md-6">
                          <h5>Code postal</h5>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.code_postal}</p>
                        </div>
                        <div className="col-md-6">
                          <h5>Adresse</h5>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.adresse}</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId={true}>
                  <Row>
                    <Col sm="12">
                      {
                        favoris.length > 0 ?
                          favoris.map(fav => (
                            <div key={fav.id}>
                              <Card>
                                <CardBody>
                                  <CardTitle tag="h5" className="card_title_center">
                                    <NavLink href={`/ressource/${fav.id_ressource}`} className="ressource_link">
                                      <Alert color="danger" className="alert_fav_container">
                                        <IoIosStar />
                                        Ressource numéro : {fav.id_ressource}
                                      </Alert>
                                    </NavLink>
                                  </CardTitle>
                                </CardBody>
                              </Card>
                            </div>
                          ))
                          :
                          <div>Vous n'avez aucune ressource en favoris</div>
                      }
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </form>
        </div>
        <div className="container emp-profile">
          <h3 className="my_ressources_title">Mes ressources</h3>
        
          {
            listUserRessources.length > 0 ?
              listUserRessources.map(listUserRessource => (
                <div key={listUserRessource.id}>
                  <Row className="row_background_wrapper">
                    <Col className="my_ressource_text_wrapper">
                      Titre : {' '}
                      {listUserRessource.titre}
                    </Col>
                    <Col className="my_ressource_text_wrapper">
                      {listUserRessource.theme}
                    </Col>
                    <Col className="my_ressource_text_wrapper">
                      {listUserRessource.type_ressource}
                    </Col>
                    <Col className="my_ressource_text_wrapper">
                      Ressource privée : {' '}
                      {
                        listUserRessource.private === 0 ?
                          <div className="private_non">Non</div>
                          :
                          <div className="private_oui">Oui</div>
                      }
                    </Col>
                    <Col className="my_ressource_text_wrapper">
                      <NavLink href={`/ressource/${listUserRessource.id_ressource}`} className="ressource_link_profil">
                        Lien vers l'article
                      </NavLink>
                    </Col>
                  </Row>
                  <br />
                </div>
              ))
              :
              null
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    isLogged: state.connectReducer.isLogged,
    authlevel: state.connectReducer.authlevel,
    userData: state.userReducer.user,
    favoris: state.ressource.favoris,
    userRessources: state.ressource.ressources
  };
}

function mapDispatchToProps(dispatch) {

  return {
    authControl: none => dispatch(authControl()),
    getFavorisByUserId: uId => dispatch(getFavorisByUserId(uId)),
    getRessource: () => dispatch(getRessource())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilDetails);
