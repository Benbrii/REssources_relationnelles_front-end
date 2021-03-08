import React, { Component } from 'react';
import {Form,Col,Button,FormControl,Row} from 'react-bootstrap'

import { connect } from 'react-redux';
import {changeRole} from '../../actions/admin.action';

class AdminForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user:{
        email:"",
        role:"User",
      }
    };
    this.updateRoles = this.updateRoles.bind(this);
  }

    updateRoles(e) {
      e.preventDefault();
      const {user} = this.state;
      this.props.changeRole(user);
  }

  render() {
    const {roles} = this.props
    
    return (
      <div>
        <fieldset className="fieldset">
          <legend>Utilisateurs</legend>
          <Form>
            <Row>
              <Col sm={3} className="offset-md-2">
              <FormControl id="inlineFormInputGroup" placeholder="Email" onChange={e => { this.setState({ user: {...this.state.user, email: e.target.value } }); e.preventDefault(); }}/>
              </Col>
              <Col sm={3}>
              <Form.Control as="select" defaultValue="User" onChange={e => { this.setState({ user: { ...this.state.user, role: e.target.value } }); e.preventDefault(); }}>
                  {
                      roles.map((role) =>
                        <option key={role.id}>{role.labelle}</option>
                      )
                  }
              </Form.Control>
              </Col>
              <Col sm={2}>
                <Button type="submit" className="mb-2" onClick={this.updateRoles}>
                  Envoyer
                </Button>
              </Col>
            </Row>
          </Form>
        </fieldset>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    roles: state.adminReducer.roles,
    message: state.adminReducer.message,
    updateRole: state.adminReducer.updateRole
  };
}

function mapDispatchToProps(dispatch) {

  return {
    changeRole: pack => dispatch(changeRole(pack))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminForm);
