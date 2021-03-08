import React, { Component } from 'react';

//comoonent
import AdminRoleForm from '../../components/Admin_form/admin_role_form';
import AdminCatForm from '../../components/Admin_form/admin_cat_form';
import AdminStatFilter from '../../components/Admin_form/adminStatFilter';
import Footer from '../../components/Footer'
import NavBar from '../NavBar'

import LineChart from '../../components/Diagramme/lineChart'

//Bootstrap
import {Row,Col} from 'react-bootstrap'

//Action
import { authControl } from "../../actions/connexion.action"
import { connect } from 'react-redux';
import {updateAdminForm} from '../../actions/admin.action';
import "./style.css";



class AdminPage extends Component {

    componentDidMount() {

        this.props.updateAdminForm();

        this.props.authControl().then(() => {
          if (this.props.isLogged === false && (this.props.authlevel !== 4 || this.props.authlevel !== 3)) {
            window.location.href = "/";
          }
        }).catch(
          (e) => {
            window.location.href = "/";
          }
        )
    }

    render() {
        console.log("this.props.authlevel",this.props.authlevel)
        return (
            <div>
                <NavBar/>
                {this.props.authlevel === 4 ? 
                  <AdminRoleForm/>
                :null
                }
                <AdminCatForm/>
                <Row>
                  <Col sm={6} className="offset-md-3">
                    <AdminStatFilter/>
                  </Col>
                </Row>
                <Row>
                    <Col sm={6} className="offset-md-3">
                        <LineChart/>
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
      authlevel: state.connectReducer.authlevel
    };
  }
  
  
  function mapDispatchToProps(dispatch) {
  
    return {
      updateAdminForm: () => dispatch(updateAdminForm()),
      authControl: () => dispatch(authControl())
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