import React, {useState,useContext, Fragment, useEffect } from "react"

import Task from "./Task"
import {ListGroup, Card, Row, Col, Badge,} from "react-bootstrap"

import { TOGGLE_SUBTASK,DELETE_TASK,APPLY_FILTER,REMOVE_FILTER } from "../../Context/action.types"
import { FilterContext } from "../../Context/FilterContext"

const TodoList = (props) => {

    const { filter, dispatchFilter } = useContext(FilterContext);
    let tasks = [];
    if(filter !== "all"){
        const filterTasks = props.allTasks.filter(task => task.tags.includes(filter))
        tasks = filterTasks.filter(task => task.branch === props.branch)
    }
    else{
        tasks = props.allTasks.filter(task => task.branch === props.branch)
    }

    return(
        <Col md={4}>
                <Card>
                    <Card.Header style={props.style}>{props.type}</Card.Header>
                    <Card.Body>
                        <Task allTasks={tasks}/>
                    </Card.Body>
                </Card>
            </Col>
        
    )
}

export default TodoList