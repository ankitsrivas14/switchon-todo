import React from "react"
import {Route,Redirect} from "react-router-dom"

import useAuth from "../Components/Login/login"

const PublicRoute = ({children, ...rest}) => {
    const isLogin = useAuth()
    return(
        <Route {...rest} render={({location}) => 
            !isLogin ? (children)  : (<Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />)
        } /> 
    )
}

export default PublicRoute