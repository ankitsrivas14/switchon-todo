import React, { useState, useContext, Fragment, useEffect } from "react"

import TaskForm from "./TaskForm"
import TodoList from "./TodoList"
import { TaskContext } from "../../Context/TaskContext"


import {Button, Row} from "react-bootstrap"
import { Link } from "react-router-dom"

const TaskBoard = () => {
    const { tasks, dispatchTask } = useContext(TaskContext);

    const [allTasks, setAllTasks] = useState(tasks)


    return (
        <Fragment>
            <Link to="/create">Create</Link>
            <Row>
                <TodoList type="To-Do" branch="to-do" style={{ backgroundColor: "#F2C94C", fontWeight: "bold" }} allTasks={allTasks} />
                <TodoList type="In-progress" branch="in-progress" style={{ backgroundColor: "#28AE60", fontWeight: "bold", color: "#ffffff" }} allTasks={allTasks} />
                <TodoList type="Done" branch="done" style={{ backgroundColor: "#2E81ED", fontWeight: "bold", color: "#ffffff" }} allTasks={allTasks} />
            </Row>
        </Fragment>
    )
}

export default TaskBoard