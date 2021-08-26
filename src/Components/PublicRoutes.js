import React from 'react';
import { Component } from 'react';
import { useSelector } from 'react-redux';
import { Redirect ,Route } from 'react-router';

const PublicRoute = ({ component: Component, ...rest }) => {
    const token = useSelector((state => state.token));
    return (
        <Route
            {...rest}
            render={(props) => (
                token ?
                    (<Redirect to="/dash" />)
                    :
                    (<Component{...rest}{...props} />)

            )}
        />
    );
};


export default PublicRoute;