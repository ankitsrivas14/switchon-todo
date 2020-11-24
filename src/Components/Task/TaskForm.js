import React, { useState, useContext, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { v4 } from "uuid"

import { ADD_TASK, UPDATE_TASK } from "../../Context/action.types"
import { TaskContext } from "../../Context/TaskContext"

import { RiDeleteBin7Line } from "react-icons/ri"
import { Form, InputGroup, Button, FormControl, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import { useHistory } from "react-router-dom"

const TaskForm = () => {
    const { taskId } = useParams("taskId")
    const { tasks, dispatchTask } = useContext(TaskContext)
    const history = useHistory()
    const [taskInfo, setTaskInfo] = useState(null)

    let isPersonal,isOfficial,isMiscellaneous = false;


    useEffect(() => {
        if (taskId) {
            const taskToUpdate = tasks.filter(task => task.id === taskId);
            setTaskInfo(taskToUpdate[0]);
        } else {
            setTaskInfo({
                id: v4(),
                name: "",
                description: "",
                branch: "",
                tags: [],
                date: "",
                subtasks: [{
                    subId: v4(),
                    value: "",
                    status: false
                }]
            })
        }
    }, [taskId])

    if (taskId){
        const taskToEdit = tasks.filter(task => task.id === taskId);
        isPersonal = (taskToEdit[0].tags).filter(tag => tag === "personal")
        isOfficial = (taskToEdit[0].tags).filter(tag => tag === "official")
        isMiscellaneous = (taskToEdit[0].tags).filter(tag => tag === "miscellaneous")

    }

    const addSubtaskfield = () => {
        const newSubtask = {
            subId: v4(),
            value: "",
            status: false
        };
        setTaskInfo({
            ...taskInfo,
            subtasks: [
                ...taskInfo.subtasks,
                newSubtask
            ]
        });
    }

    const removeSubtaskfield = (subId) => {
        setTaskInfo({
            ...taskInfo,
            subtasks: taskInfo.subtasks.filter(s => s.subId !== subId)
        });
    }

    const handleSubtask = (e, subId) => {
        const subtasks = [...taskInfo.subtasks];
        const subtask = subtasks.find(s => s.subId === subId);
        subtask.value = e.target.value;
        setTaskInfo({
            ...taskInfo,
            subtasks
        });
    }

    const markSubtaskDone = (e, subId) => {
        const subtasks = [...taskInfo.subtasks];
        const subtask = subtasks.find(s => s.subId === subId);
        subtask.status = e.target.checked;
        setTaskInfo({
            ...taskInfo,
            subtasks
        });
    }

    const handleTag = (e) => {
        if (e.target.checked)
            setTaskInfo({ ...taskInfo, tags: [...taskInfo.tags, e.target.value] })
        else
            setTaskInfo({ ...taskInfo, tags: taskInfo.tags.filter(t => t !== e.target.value) })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            taskInfo.name !== "" &&
            taskInfo.description !== "" &&
            taskInfo.branch !== "" &&
            taskInfo.date !== "" &&
            (taskInfo.tags).length !== 0 &&
            taskInfo.subtasks[0].value !== ""
        ) {
            if(taskId){
                dispatchTask({
                    type: UPDATE_TASK,
                    payload: taskInfo
                })
                localStorage.setItem("tasks", JSON.stringify(tasks))
            }
            else {
                dispatchTask({
                    type: ADD_TASK,
                    payload: taskInfo
                })
                localStorage.setItem("tasks", JSON.stringify([...tasks, taskInfo]))
            }

            setTaskInfo({
                id: v4(),
                name: "",
                description: "",
                branch: "",
                tags: [],
                date: "",
                subtasks: [{
                    subId: v4(),
                    value: "",
                    status: false
                }]
            })

            goBack();
        }
        else {
            return alert("Form is incomplete")
        }
    }

    const goBack = () => history.push("/")
    return (
        taskInfo
            ? (
                <Form>
                    Enter Task Name <input type="text" placeholder="Task Name" value={taskInfo.name} onChange={e => setTaskInfo({ ...taskInfo, name: e.target.value })} />
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter Description</Form.Label>
                        <Form.Control as="textarea" rows={3} col={8} value={taskInfo.description} onChange={e => setTaskInfo({ ...taskInfo, description: e.target.value })} />
                    </Form.Group>
            Branch to
                    <ToggleButtonGroup name="branch" type="radio" className="mb-3" value={taskInfo.branch} onChange={value => setTaskInfo({ ...taskInfo, branch: value })}>
                        <ToggleButton value="to-do" variant="outline-secondary">To-Do</ToggleButton>
                        <ToggleButton value="in-progress" variant="outline-secondary">In-Progress</ToggleButton>
                        <ToggleButton value="done" variant="outline-secondary">Done</ToggleButton>
                    </ToggleButtonGroup>
            Select Tag
                    <div className="mb-3">
                        <Form.Check type="checkbox" value="personal" label="Personal" checked={isPersonal} onChange={e => handleTag(e)} />
                        <Form.Check type="checkbox" value="official" label="Official" checked={isOfficial} onChange={e => handleTag(e)} />
                        <Form.Check type="checkbox" value="miscellaneous" label="Miscellaneous" checked={isMiscellaneous}  onChange={e => handleTag(e)} />
                    </div>
            Select Date <input type="text" placeholder="Enter Date" value={taskInfo.date} onChange={e => setTaskInfo({ ...taskInfo, date: e.target.value })} />
                    {taskInfo.subtasks.map((subtask) => {
                        return (
                            <InputGroup key={subtask.subId} className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox checked={subtask.status} onChange={e => markSubtaskDone(e, subtask.subId)} />
                                </InputGroup.Prepend>
                                <FormControl type="text" value={subtask.value} onChange={e => handleSubtask(e, subtask.subId)} />
                                <div onClick={() => removeSubtaskfield(subtask.subId)}><span><RiDeleteBin7Line /></span></div>
                            </InputGroup>
                        )
                    })}

                    <Button onClick={addSubtaskfield} variant="link">+ New Sub Task</Button>
                    <Button onClick={goBack} variant="light">Back</Button>
                    <Button onClick={handleSubmit} type="submit" variant="success">Create</Button>
                </Form>
            )
            : null
    )
}

export default TaskForm