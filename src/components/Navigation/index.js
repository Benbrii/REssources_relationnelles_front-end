import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfil } from '../../actions/user.action';
import './styles.css';


class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount(){
        
        this.props.getProfil().then(
            () => {
               
            }
        )    
    }

    render(){
        return (
            <>
                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3>PHOTO</h3>
                        </div>

                        <ul className="list-unstyled components">
                            <p></p>
                            <li>
                                <a href="#">item 1</a>
                            </li>
                            <li>
                                <a href="#">item 2</a>
                            </li>
                            <li>
                                <a href="#">item 3</a>
                            </li>
                            <li>
                                <a href="#">item 4</a>
                            </li>
                            <li>
                                <a href="#">item 5</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        );
    };
}


function mapStateToProps(state) {
    
    return {
        firstname: state.UserReducer.firstname,
        lastname:state.UserReducer.lastname
    };
}


function mapDispatchToProps(dispatch) {
    
    return {
        getProfil: () => dispatch(getProfil())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);


