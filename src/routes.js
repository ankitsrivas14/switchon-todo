import {Route,Switch, BrowserRouter as Router} from 'react-router-dom'
import React from "react"

import App from './App';
import Login from "./Components/Login/LoginForm"
import {Logout} from "./Components/Logout/Logout"
import NotFound from "./Components/NotFound"

import PublicRoute from "./Containers/PublicRoute"
import PrivateRoute from "./Containers/PrivateRoute"
import AddTodo from './Components/Todo/AddTodo';

export const Routing = () => (
    <Router>
      <Switch>
        <PrivateRoute exact path="/"><App /></PrivateRoute>
        <PublicRoute exact path="/login"><Login /></PublicRoute>
        <PrivateRoute path="/create"><AddTodo /></PrivateRoute>
        <Route exact path="/logout" component={Logout} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )

