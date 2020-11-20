import React, { Fragment } from "react"
import { Redirect } from "react-router-dom"

import {Button} from "react-bootstrap"

const Todo = () => {

    const handleClick = () => {
        
    }

    return(
        <Fragment>
            <Button onClick={handleClick} variant="success" size="sm">New Task</Button>
        </Fragment>
    )
}

export default Todo