import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loginUser } from "../actions";
import {loginUserApi} from "../Service/api.js"
import Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
const Login =()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const data = useSelector((state => state.login));

    const onValueChange=(e)=>{
        dispatch(loginUser({...data , [e.target.name]: e.target.value}))
    }
    const login=()=>{
        dispatch(loginUserApi(data));
        history.push("/dash");
    }
    return(
        <>
        <h1> login Page </h1>
        <form onSubmit={() => login()} >
                Email:<input name="email" type="email" placeholder="enter you email " onChange={(e) => onValueChange(e)} />
                <br></br>
                password:<input name="password" type="password" placeholder="enter password " onChange={(e) => onValueChange(e)} />
                <br>
                </br>
                <Button onClick={() => login()} variant="primary" type="submit" >Login </Button>
        </form>
        </>
    )
}


export default Login;