import React from "react"
import { Container, Row, Card, Button } from "react-bootstrap";

const Profile = () => {
    const localUserData = localStorage.getItem("user");
    const user = JSON.parse(localUserData)
    return(
            <Row>
                <Card>
                <img height="50" width="50"  className="float-left rounded-circle img-thumbnail border-success"src="https://cdn3.iconfinder.com/data/icons/corporate-avatars-in-various-human-skin-tones-1/100/Corporate_Avatars_colour_42-01-512.png" />
                <Card.Body className="float-right" >
                    <Card.Text>
                        {user.first_name} {user.last_name}<br />
                        {user.email}
                    </Card.Text>
                </Card.Body>
                </Card>
            </Row>
    )
}

export default Profile;