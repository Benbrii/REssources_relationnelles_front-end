
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    console.log("...rest",{...rest})
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            props.isLogged === true ?
                <Component {...props} />
            :null//<Redirect to="/connexion" />
        )} />
    );
};

export default PrivateRoute;