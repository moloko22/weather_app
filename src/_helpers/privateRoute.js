import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, city, ...rest }) => (
    <Route {...rest} render={props => (
        city
            ? <Component {...props} />
            : <Redirect to={'/'} />
    )} />
)