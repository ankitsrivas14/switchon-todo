import React from "react"
import {Route,Redirect} from "react-router-dom"

import useAuth from "../Components/Login/login"

const PrivateRoute = ({children, ...rest}) => {
    const isLogin = useAuth()
    return(
        <Route {...rest} render={({location}) => 
            isLogin ? (children)  : (<Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />)
        } /> 
    )
}

export default PrivateRoute