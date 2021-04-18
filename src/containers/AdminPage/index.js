import React, { Component } from 'react';

//component
import AdminUSerForm from '../../components/Admin_form/admin_user_form';
import AdminCatForm from '../../components/Admin_form/admin_cat_form';
import AdminStatFilter from '../../components/Admin_form/adminStatFilter';
import Footer from '../../components/Footer'
import NavBar from '../NavBar'

import LineChartConsultation from '../../components/Diagramme/lineChartConsulatation'
import LineChartCreation from '../../components/Diagramme/lineChartCreation'
//Bootstrap
import {Row,Col} from 'react-bootstrap'

//Action
import { authControl } from "../../actions/connexion.action"
import { connect } from 'react-redux';
import {updateAdminForm,getStat} from '../../actions/admin.action';

import "./style.css";



class AdminPage extends Component {


     componentDidMount(){
        this.props.authControl().then(() => {
          if (this.props.isLogged === false) {
            window.location.href = '/connexion'
          }else{
            this.props.updateAdminForm();
            let newDate = new Date();
            let year = newDate.getFullYear();
      
            this.props.getStat({annee:year,categorie:"Toutes categories",type:"tout types"});
          }
        }).catch(()=>{
          if (this.props.isLogged === false) {
            window.location.href = '/connexion'
          }
        })  
      }
     
    render() {
      const {ErrorMessage,greatMessage} = this.props
    
      
        return (
            <div>
                <NavBar/>

                {ErrorMessage && (
                  <div className="form-group">
                      <div className="alert alert-danger col-sm-12" role="alert">
                          {ErrorMessage}
                      </div>
                  </div>
                )}

                {greatMessage && (
                  <div className="form-group">
                      <div className="alert alert-success col-sm-12" role="alert">
                          {greatMessage}
                      </div>
                  </div>
                )}

                {this.props.authlevel === 4 ? 
                  <AdminUSerForm/>
                :null
                }
                <AdminCatForm/>

                <Row>
                  <Col sm={6} className="offset-md-3">
                    <AdminStatFilter/>
                  </Col>
                </Row>
                
                <Row>
                    <Col sm={6}>
                        <h2>Consultation</h2>
                        <LineChartConsultation title="consultation" color= "rgba(75,192,192,1)" dataConst={this.props.dataConst}/>
                    </Col>
                
                    <Col sm={6}>
                        <h2>Création</h2>
                        <LineChartCreation title="creation" color= "rgba(192, 75, 75, 1)" dataCrea={this.props.dataCrea}/>
                    </Col>
                </Row>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
      isLogged: state.connectReducer.isLogged,
      authlevel: state.userReducer.authlevel,
      ErrorMessage:state.messageReducer.ErrorMessage,
      greatMessage:state.messageReducer.greatMessage,
      dataConst : state.statReducer.dataConst,
      dataCrea : state.statReducer.dataCrea
    };
  }

  function mapDispatchToProps(dispatch) {
  
    return {
      updateAdminForm: () => dispatch(updateAdminForm()),
      authControl: () => dispatch(authControl()),
      getStat: filter => dispatch(getStat(filter))
    };
  }


export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);


//Administrateur------------------------------------------------------
/*

Ajouter / Editer une catégorie de ressources 
Supprimer une catégorie de ressources 
Afficher le tableau de bord statistiques
(consultation, recherche, exploitations, créations) 
Filtrer les statistiques (périodes, catégories, types
de relations, de ressources, zones géographiques,
etc.)
Exporter les statistiques

//super-administrateur -------------------------------------------------
Création d’un compte modérateur /administrateur / super-administrateur 
*/


/*BENOIT
Lister / Filtrer les ressources en Back Office 
Supprimer / Suspendre une ressource
Ajouter / Editer une ressource

*/

/*STAT

- Afficher le tableau de bord statistiques (consultation, recherche, exploitations, créations)

- Filtrer les statistiques (périodes, catégories, types de relations, de ressources, zones géographiques, etc.)

- Exporter les statistiques
*/