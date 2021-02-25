import React, { Component } from 'react';
import img from '../../assets/img/CUBE.png';
import './style.css';
import { disconnectUser } from '../../actions/connexion.action';
import { connect } from 'react-redux';

// bootstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }

    this.logout = this.logout.bind(this);

  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    })
  }

  logout = () => {
    this.props.disconnectUser()
  };

  render() {
    const { isOpen } = this.state;
    return (

      < div >
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/home">
            <img src={img} alt="REsource RElationnelle" />
          </NavbarBrand>
          <NavbarToggler onClick={() => this.toggle()} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="text_top_nav" href="/home">Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text_top_nav" href="/profil">Profil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text_top_nav" href="/home">Notifications</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text_top_nav" href="/home">Discussions</NavLink>
              </NavItem>
            </Nav>
            <NavLink className="nav-link" onClick={this.logout} href="/" >Déconnexion</NavLink>
          </Collapse>
        </Navbar>
      </div >
    )
  }
}


function mapDispatchToProps(dispatch) {

  return {
    disconnectUser: () => dispatch(disconnectUser())
  };
}
export default connect(mapDispatchToProps)(NavBar);


