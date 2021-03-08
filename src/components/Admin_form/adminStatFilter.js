import React, { Component } from 'react';
import {Form,Col,Button,FormControl,Row} from 'react-bootstrap'

import { connect } from 'react-redux';
import {addCategorie} from '../../actions/admin.action';

class AdminStatFilter extends Component {
  
constructor(props) {
  super(props);
  this.state = {
    filter:{
        annee:"",
        categorie:"",
        theme:""
    }
  };
 
  
  //this.delCat = this.delCat.bind(this);
}

 
 /* delCat(e) {
    e.preventDefault();
    const {ressource} = this.state;
    this.props.deleteCat(ressource);
}*/

  render() {
    const {categories,years} = this.props
    return (
      <div>
        <fieldset className="fieldset">
          <legend>Statistique</legend>
          <Form>
            <Row className="adminCatForm">
              <Col sm={3} className="offset-md-1">
                <Form.Control as="select" onChange={e => { this.setState({ filter: {...this.state.filter, annee: e.target.value } }); e.preventDefault(); }}>
                {
                      years.map((year) =>
                        <option key={year}>{year}</option>
                      )
                  }
                </Form.Control>
              </Col>
              <Col sm={3}>
                <Form.Control as="select" onChange={e => { this.setState({ filter: {...this.state.filter, categorie: e.target.value } }); e.preventDefault(); }}>
                {
                      categories.map((categorie) =>
                        <option key={categorie.id}>{categorie.labelle}</option>
                      )
                  }
                </Form.Control>
              </Col>
              <Col sm={3}>
                <Form.Control as="select" onChange={e => { this.setState({ filter: {...this.state.filter, theme: e.target.value } }); e.preventDefault(); }}>
                </Form.Control>
              </Col>
              <Col sm={1}>
                <Button type="submit" onClick={this.filter}> Ajouter </Button>
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
    categories: state.adminReducer.categories,
    years: state.adminReducer.years
  };
}

function mapDispatchToProps(dispatch) {

  return {
    //addCategorie: ressource => dispatch(addCategorie(ressource)),
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminStatFilter);

