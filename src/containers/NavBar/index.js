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
    this.props.disconnectUser().then(() => {console.log("DISCONNECT")})
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

              {this.props.authlevel === 4 || this.props.authlevel === 3 ?
              <NavItem>
                <NavLink className="text_top_nav" href="/adminPage">Admin</NavLink>
              </NavItem>
              :null}

              {this.props.authlevel === 2?
              <NavItem>
                <NavLink className="text_top_nav" href="/home">Moderateur</NavLink>
              </NavItem>
              :null}
            </Nav>
            
            {this.props.isLogged === true?
              <NavLink className="nav-link" onClick={this.logout} >Déconnexion</NavLink>
              :
              <NavLink className="nav-link" href="/connexion" >Connexion</NavLink>
            }
              
          </Collapse>
        </Navbar>
      </div >
    )
  }
}

function mapStateToProps(state) {

  return {
     
      authlevel: state.connectReducer.authlevel,
      isLogged: state.connectReducer.isLogged
  };
}


function mapDispatchToProps(dispatch) {

  return {
    disconnectUser: () => dispatch(disconnectUser())
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);



