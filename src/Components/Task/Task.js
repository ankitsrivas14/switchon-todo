import React, {useContext, Fragment } from "react"
import {Link, useHistory } from "react-router-dom";

import { TaskContext } from "../../Context/TaskContext"
import { TOGGLE_SUBTASK,DELETE_TASK, EDIT_TASK} from "../../Context/action.types"

import {ListGroup, Card, Badge,Button, Form} from "react-bootstrap"

const Task = (props) => {

    const {tasks,dispatchTask} = useContext(TaskContext)
    const history = useHistory()

    return(
        <Fragment>
                {props.allTasks.map(t => {
                    return(
                            <Card key={t.id} style={{ width: '18rem' }}>
                                <Link to={`/edit/${t.id}`}>Edit</Link>
                                <Button variant="info" onClick={() => {
                                    dispatchTask({
                                        type:DELETE_TASK,
                                        payload: t.id
                                    })
                                    const allTasks = tasks.filter(task => task.id !== t.id)
                                    localStorage.setItem("tasks", JSON.stringify(allTasks))
                                }}>Delete</Button>
                                <Card.Body>
                                    {t.tags.map((tag,i) => <Badge key={i} className={tag}>{tag}</Badge>)}
                                    
                                    <Card.Title>{t.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{t.description}</Card.Subtitle>
                                    {
                                        t.subtasks.map( st =>
                                            (   
                                                <ListGroup key={st.subId}>
                                                    <Form.Check type="checkbox"  checked={st.status} onChange={() => {
                                                        const subtaskInfo = {
                                                            id: t.id,
                                                            subId: st.subId
                                                        }
                                                        dispatchTask({
                                                            type: TOGGLE_SUBTASK,
                                                            payload: subtaskInfo
                                                        })
                                                    }}/>
                                                    <ListGroup.Item>{st.value}</ListGroup.Item>
                                                </ListGroup>
                                                )
                                        )
                                    }
                                </Card.Body>
                            </Card>
                    )
                }
            )

        }

        
        </Fragment>
    )
}

export default Task