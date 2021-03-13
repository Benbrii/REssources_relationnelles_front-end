import React, { Component } from 'react';
import "./style.css";

// components
import ActuPage from "../../components/ActuPage";
import NavBar from '../NavBar'
import Footer from '../../components/Footer';
import {updateAdminForm} from '../../actions/admin.action';
import { connect } from 'react-redux';

class Home extends Component {

  componentDidMount(){
    this.props.updateAdminForm();
  }

  appearNavBar() {
    const navs = document.querySelectorAll('.navbar-collapse')
    navs.forEach(nav => nav.classList.toggle('collapse'));
  }
  

  render() {

    return (
      <>
        <NavBar onClick={this.appearNavBar} />
        <h2 className="fil_title_center">Fil d'actualité</h2>
        <ActuPage />
        <Footer />
      </>
    );
  }
}

function mapStateToProps(state) {

  return {
  };
}

function mapDispatchToProps(dispatch) {

  return {
    updateAdminForm: () => dispatch(updateAdminForm())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


