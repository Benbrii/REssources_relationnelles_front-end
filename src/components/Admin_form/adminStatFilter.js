import React, { Component } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap'

import { connect } from 'react-redux';
import { getStat } from '../../actions/admin.action';

class AdminStatFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: {
        annee: "",
        categorie: "Toutes categories",
        type: "tout types"
      }
    };

    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    this.setState({ filter: { ...this.state.filter, annee: this.props.years[0] } })
  }

  filter(e) {
    e.preventDefault();
    const { filter } = this.state;
    this.props.getStat(filter);
  }

  render() {
    const { categories, years, types } = this.props
    return (
      <div>
        <fieldset className="fieldset">
          <legend>Statistique</legend>
          <Form>
            <Row className="adminCatForm">
              <Col sm={3} className="offset-md-1">
                <Form.Control as="select" onChange={e => { this.setState({ filter: { ...this.state.filter, annee: e.target.value } }); e.preventDefault(); }}>
                  {
                    years.map((year) =>
                      <option key={year}>{year}</option>
                    )
                  }
                </Form.Control>
              </Col>
              <Col sm={3}>
                <Form.Control as="select" onChange={e => { this.setState({ filter: { ...this.state.filter, categorie: e.target.value } }); e.preventDefault(); }}>
                  <option key="tout">Toutes categories</option>
                  {
                    categories.map((categorie) =>
                      <option key={categorie.id}>{categorie.labelle}</option>
                    )
                  }
                </Form.Control>
              </Col>
              <Col sm={3}>
                <Form.Control as="select" onChange={e => { this.setState({ filter: { ...this.state.filter, type: e.target.value } }); e.preventDefault(); }}>
                  <option key="tout">tout types</option>
                  {
                    types.map((type) =>
                      <option key={type.id}>{type.labelle}</option>
                    )
                  }
                </Form.Control>
              </Col>
              <Col sm={1}>
                <Button type="submit" onClick={this.filter}> Filtrer </Button>
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
    years: state.adminReducer.years,
    types: state.adminReducer.types
  };
}

function mapDispatchToProps(dispatch) {

  return {
    getStat: filter => dispatch(getStat(filter))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminStatFilter);

