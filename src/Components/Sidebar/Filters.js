import React, {useContext, useState} from "react"
import { Row, Button, Badge } from "react-bootstrap"

import {FilterContext} from "../../Context/FilterContext"

import { APPLY_FILTER,REMOVE_FILTER } from "../../Context/action.types"


const Filters = () => {
    const { filter, dispatchFilter } = useContext(FilterContext);

    const getLocal = localStorage.getItem("tasks")

    // Counting individual filters
    let personalCount,officialCount,miscellaneousCount = 0;
    if (getLocal) {
        const allTasks = JSON.parse(getLocal)
        personalCount = (allTasks.filter(task => task.tags.includes("personal"))).length;
        officialCount = (allTasks.filter(task => task.tags.includes("official"))).length;
        miscellaneousCount = (allTasks.filter(task => task.tags.includes("miscellaneous"))).length;
    }
    
    
    

    const ApplyFilter = (e) =>{

        dispatchFilter({
            type: APPLY_FILTER,
            payload: e.target.value
        })
    }
    
    return(
        <Row style={{backgroundColor:"#f2f2f2"}}>
            <Button className="personal" value="personal" onClick={e => ApplyFilter(e)}>Personal <Badge variant="light">{personalCount}</Badge> </Button>
            <Button className="official" value="official" onClick={e => ApplyFilter(e)}>Official <Badge variant="light">{officialCount}</Badge></Button>
            <Button className="miscellaneous" value="miscellaneous" onClick={e => ApplyFilter(e)}>Miscellaneous <Badge variant="light">{miscellaneousCount}</Badge></Button>
        </Row>
    )
}

export default Filters