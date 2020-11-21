import React, {useReducer } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { TaskContext } from "./Context/TaskContext"
import TaskReducer from "./Context/reducer"

import Todo from './Components/Task/Task';
import Sidebar from './Components/Sidebar/Sidebar';
import { Fragment } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

import Task from "./Components/Task/Task"
import TaskForm from "./Components/Task/TaskForm"

const App = () => {
  const [task, dispatch] = useReducer(TaskReducer, []);
  

  return(
    <TaskContext.Provider value={{task, dispatch}}>
      <Container fluid>
        <Row>
          <Col md={3}><Sidebar /></Col>
          <Col>
            <Button variant="success" size="sm">New Task</Button>
            <TaskForm />
            <Task />
          </Col>
        </Row>
      </Container>
    </TaskContext.Provider>
  )

}

export default App;
