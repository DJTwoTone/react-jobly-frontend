//Home, Campanies, Companies/handle, Jobs, Login, Signup, Profile

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Company from './Company';
import Companies from './Companies';
import Jobs from './Jobs';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoutes';



function Routes({ setToken }) {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/login'>
                    <Login setToken={setToken}/>
                </Route>

                <Route exact path='/signup'>
                    <Signup setToken={setToken}/>
                </Route>

                <ProtectedRoute exact path='/companies/:handle'>
                    <Company />
                </ProtectedRoute>

                <ProtectedRoute exact path='/companies'>
                    <Companies />
                </ProtectedRoute>

                <ProtectedRoute exact path='/jobs'>
                    <Jobs />
                </ProtectedRoute>

                <ProtectedRoute exact path='/profile'>
                    <Profile />
                </ProtectedRoute>

            </Switch>
        </div>
    )
}

export default Routes;