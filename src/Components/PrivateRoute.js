import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({ component: Component, ...rest }) {

    const { currentUser } = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={() => {
                return currentUser ? <Component /> : <Redirect to="/" />
            }}
        >
        </Route>
    )
};

export default PrivateRoute;