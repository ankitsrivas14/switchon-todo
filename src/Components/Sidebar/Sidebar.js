import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Filters from "./Filters"
import Profile from "./Profile"

const Sidebar = () => {
    return(
        <Container fluid>
            <Row>
                <Col md={2} style={{backgroundColor:"#484C4F",height:"100vh"}}></Col>
                <Col style={{borderRight:"1px solid #28AE60"}}>
                    <Container fluid>
                        <Profile />
                        <Filters />
                    <Row>
                    Chart
                    </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Sidebar