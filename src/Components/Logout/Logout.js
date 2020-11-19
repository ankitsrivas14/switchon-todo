import React from "react"
import { Redirect, useHistory } from "react-router-dom";

export const Logout = () => {
    const history = useHistory()
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/login")
}