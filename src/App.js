import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Todo from './Components/Todo/Todo';
import Sidebar from './Components/Sidebar/Sidebar';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';




const App = () => {

  

  return(
    <Fragment>
      <Container fluid>
        <Row>
          <Col md={3}><Sidebar /></Col>
          <Col><Todo /></Col>
        </Row>
      </Container>
    </Fragment>
  )

}

export default App;
