import React from "react"
import {useHistory } from "react-router-dom";

export const Logout = () => {
    const history = useHistory()
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/login");
    return(
        null
    )
    
}