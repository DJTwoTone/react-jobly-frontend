import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from './UserContext';

function ProtectedRoute({ exact, path, children }) {
    const { user }  = useContext(UserContext);

    console.log('in the protected rouyte',user)


    if (!user) {
        return <Redirect to='/login' />
    }

    return (
        
        <Route exact={exact} path={path}>
            {children}
        </Route>

        );
}

export default ProtectedRoute;