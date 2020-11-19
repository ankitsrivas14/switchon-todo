import {Route,Switch, BrowserRouter as Router} from 'react-router-dom'
import React from "react"

import App from './App';
import Login from "./Components/Login/LoginForm"
import {Logout} from "./Components/Logout/Logout"
import NotFound from "./Components/NotFound"

import PublicRoute from "./Containers/PublicRoute"
import PrivateRoute from "./Containers/PrivateRoute"

export const Routing = () => (
    <Router>
      <Switch>
        <PrivateRoute exact path="/"><App /></PrivateRoute>
        <PublicRoute exact path="/login"><Login /></PublicRoute>
        <Route exact path="/logout" component={Logout} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )

