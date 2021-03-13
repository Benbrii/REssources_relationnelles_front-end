import React, { Component } from 'react';
import {Form,Col,Button,FormControl,Row} from 'react-bootstrap'

import { connect } from 'react-redux';
import {addCategorie,deleteCat} from '../../actions/admin.action';

class AdminCatForm extends Component {
  
constructor(props) {
  super(props);
  this.state = {
    ressource:{
      categorie:"",
      delCat:""
    }
  };
 
  this.addCat = this.addCat.bind(this);
  this.delCat = this.delCat.bind(this);
}

  delCat(e) {
    e.preventDefault();
    const {ressource} = this.state;
    this.props.deleteCat(ressource).then(() => {window.location.reload(true)});
  }

  addCat(e){
    e.preventDefault();
    const {ressource} = this.state;
    this.props.addCategorie(ressource).then(() => {window.location.reload(true);});
  }

  render() {
   const {categories} = this.props
   console.log("categories",categories)
    return (
      <div>
        <fieldset className="fieldset">
          <legend>Catégorie</legend>
          <Form>
            <Row className="adminCatForm">
              <Col sm={3} className="offset-md-4">
                <FormControl  id="inlineFormInputGroup" placeholder="Categorie" onChange={e => { this.setState({ ressource: {...this.state.ressource, categorie: e.target.value } }); e.preventDefault(); }}/>    
              </Col>
              <Col sm={1}>
                <Button type="submit" onClick={this.addCat}> Ajouter </Button>
              </Col>
            </Row>

            <Row className="adminCatForm">
              <Col sm={3} className="offset-md-4">
                <Form.Control as="select" onChange={e => { this.setState({ ressource: { ...this.state.user, delCat: e.target.value } }); e.preventDefault(); }}>
                  {
                      categories.map((categorie) =>
                        <option key={categorie.id}>{categorie.labelle}</option>
                      )
                  }
                </Form.Control>
              </Col>
              <Col sm={1}>
                <Button type="submit"  onClick={this.delCat}> Supprimer </Button>
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
    deleteCategories: state.adminReducer.deleteCategories
  };
}

function mapDispatchToProps(dispatch) {

  return {
    addCategorie: ressource => dispatch(addCategorie(ressource)),
    deleteCat: ressource => dispatch(deleteCat(ressource))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCatForm);

