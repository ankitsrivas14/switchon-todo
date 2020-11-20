import React from "react"
import { Form, InputGroup, Button,FormControl } from "react-bootstrap"

const AddTodo = () => {
    return(

            

        <Form>

        Enter Task Name <input type="text" placeholder="Task Name" />
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter Description</Form.Label>
            <Form.Control as="textarea" rows={3} col={8} />
        </Form.Group>
            Branch to
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <Button variant="outline-secondary">To-Do</Button>
                <Button variant="outline-secondary">In-Progress</Button>
                <Button variant="outline-secondary">Done</Button>
                </InputGroup.Prepend>
            </InputGroup>
            
            Select Tag
                <div className="mb-3">
                  <Form.Check type="checkbox" label="Personal"/>
                  <Form.Check type="checkbox" label="Official"/>
                  <Form.Check type="checkbox" label="Miscellaneous"/>
                </div>
            Select Date
            Sub task
        
        </Form>
    )
}

export default AddTodo