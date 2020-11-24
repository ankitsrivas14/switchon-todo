import React, { Fragment, useReducer, useState } from "react"
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom'
import PrivateRoute from "./Containers/PrivateRoute"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import { TaskContext } from "./Context/TaskContext"
import { initialState, TaskReducer } from "./Context/reducer"
import { FilterContext } from "./Context/FilterContext"
import { FilterReducer } from "./Context/reducer"

import Sidebar from './Components/Sidebar/Sidebar';
import { Col, Container, Row, Button } from 'react-bootstrap';

import TaskBoard from "./Components/Task/TaskBoard"
import TaskForm from "./Components/Task/TaskForm"
import TodoForm from "./Components/Task/TaskForm"

const App = (props) => {


  const [tasks, dispatchTask] = useReducer(TaskReducer, initialState);
  const [filter, dispatchFilter] = useReducer(FilterReducer, "all");
  

  return (
    <TaskContext.Provider value={{ tasks, dispatchTask }}>
      <FilterContext.Provider value={{ filter, dispatchFilter }}>
        <Container fluid>
          <Row>
            <Col md={3}><Sidebar /></Col>
            <Col>
              <Router>
                <Switch>
                  <PrivateRoute exact path="/"><TaskBoard /></PrivateRoute>
                  <PrivateRoute exact path="/create"><TaskForm /></PrivateRoute>
                  <PrivateRoute exact path="/edit/:taskId"><TaskForm /></PrivateRoute>
                </Switch>
              </Router>
            </Col>
          </Row>
        </Container>
      </FilterContext.Provider>
    </TaskContext.Provider>
  )

}

export default App;
