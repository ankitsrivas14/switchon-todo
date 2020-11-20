import React, { useState } from "react"
import { Form, InputGroup, Button, FormControl, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import { v4 } from "uuid"

import { RiDeleteBin7Line } from "react-icons/ri"

const TodoForm = () => {
    const [task, setTask] = useState({
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
        });

    const addSubtaskfield = () => {
        const newSubtask = {
            subId: v4(),
            value: "",
            status: false
        };
        setTask({
            ...task,
            subtasks: [
                ...task.subtasks,
                newSubtask
            ]
        });
    }

    const removeSubtaskfield = (subId) => {
        setTask({
            ...task,
            subtasks: task.subtasks.filter(s => s.subId !== subId)
        });
    }

    const handleSubtask = (e, subId) => {
        const subtask = task.subtasks.find(s => s.subId === subId);
        subtask.value = e.target.value;
        setTask({
            ...task,
            subtasks: [
                ...task.subtasks.filter(s => s.subId !== subId),
                subtask
            ]
        });
    }

    const markSubtaskDone = (e, subId) => {
        const subtask = task.subtasks.find(s => s.subId === subId);
        subtask.status = e.target.checked;
        console.log(e.target.checked)
        setTask({
            ...task,
            subtasks: [
                ...task.subtasks.filter(s => s.subId !== subId),
                subtask
            ]
        })
    }

    const handleTag = (e) => {
        if(e.target.checked)
            setTask({...task,tags:[...task.tags,e.target.value]})
        else
            setTask({...task,tags:task.tags.filter(t => t !== e.target.value)})
        
    }

    const showConsole = () => {
        console.log(task)
    }


    return (

        <Form>
            Enter Task Name <input type="text" placeholder="Task Name" onChange={e => setTask({...task,name:e.target.value})}/>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Description</Form.Label>
                <Form.Control as="textarea" rows={3} col={8} onChange={e => setTask({...task,description:e.target.value})}/>
            </Form.Group>
            Branch to
            <ToggleButtonGroup name="branch" type="radio" className="mb-3" onChange={value => setTask({...task,branch:value})}>
                    <ToggleButton value="to-do" variant="outline-secondary">To-Do</ToggleButton>
                    <ToggleButton value="in-progress" variant="outline-secondary">In-Progress</ToggleButton>
                    <ToggleButton value="done" variant="outline-secondary">Done</ToggleButton>
            </ToggleButtonGroup>

            Select Tag
            <div className="mb-3">
                <Form.Check type="checkbox" value="personal" label="Personal" onChange={e => handleTag(e)} />
                <Form.Check type="checkbox" value="official" label="Official" onChange={e => handleTag(e)} />
                <Form.Check type="checkbox" value="miscellaneous" label="Miscellaneous" onChange={e => handleTag(e)} />
            </div>
            Select Date <input type="text" placeholder="Enter Date" />
            {task.subtasks.map((subtask) => {
                return (
                    <InputGroup key={subtask.subId} className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox onChange={e => markSubtaskDone(e, subtask.subId)} />
                        </InputGroup.Prepend>
                        <FormControl type="text" value={subtask.value} onChange={e => handleSubtask(e, subtask.subId)} />
                        <div onClick={() => removeSubtaskfield(subtask.subId)}><RiDeleteBin7Line /></div>
                    </InputGroup>
                )
            })}

            <Button onClick={addSubtaskfield} variant="link">+ New Sub Task</Button>
            <Button onClick={showConsole} variant="success">Console</Button>


        </Form>



    )
}

export default TodoForm