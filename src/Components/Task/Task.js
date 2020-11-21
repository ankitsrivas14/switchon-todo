import React, {useReducer,useContext } from "react"

import TaskForm from "./TaskForm"
import { TaskContext } from "../../Context/TaskContext"

import {Button, ListGroupItem, ListGroup,} from "react-bootstrap"


const Task = () => {
    const {task,dispatch} = useContext(TaskContext)


    return(
        <ListGroup className="mt-5 mb-2 items">
            {task.map(t => (
                <ListGroupItem key={t.id}>
                    {t.name}
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Task