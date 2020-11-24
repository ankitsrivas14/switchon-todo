import React, {useState } from "react"
import {Container,Row,Col, Button,FormGroup,InputGroup} from "react-bootstrap"
import { AiOutlineMail } from "react-icons/ai"

import useAuth from "./login"
import {auth} from "../../Services/auth"
import { useHistory } from "react-router-dom"


const LoginForm = () => {

    const isAuth = useAuth();
    const history = useHistory();


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [token,setToken] = useState(null);
    const [loginError,setLoginError] = useState(null);

    const handleSubmit = async () => {
        const authResponse = await auth(email,password)
        if(authResponse.token){
            setToken(authResponse.token)
            localStorage.setItem("token",authResponse.token)
            history.push("/")
        }else{
            setLoginError(authResponse.error)
        }
        
    }

    return(
            <Container fluid>
                <Row>
                    <Col style={{backgroundColor:"#28AE60", height:"100vh"}}>
                    </Col>
                    <Col>
                        <h1>To-Do App</h1>
                            <FormGroup>
                                <InputGroup>
                                    <AiOutlineMail/><input 
                                        type="text" 
                                        placeholder="Email ID" 
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        />
                                </InputGroup>
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />

                                {loginError ? <span>{loginError}</span> : ""}
                                <Button onClick={handleSubmit} block color="success" type="submit">Login</Button>
                                
                            </FormGroup>
                    </Col>
                </Row>
            </Container>
    )
}

export default LoginForm