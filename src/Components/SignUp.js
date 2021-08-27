import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import { SetSignupUser } from '../actions';
import { userSignup } from '../Service/api.js';
import Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

const SignUp=()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const data = useSelector((state=>state.signup));
    const onValueChange=(e)=>{
        dispatch(SetSignupUser({...data, [e.target.name]:e.target.value }))
    }
    const signupUser=()=>{
        dispatch(userSignup(data));
        history.push("/login");
        
    }
    return (
        <>
        <h1> signUp User</h1>
        <form onSubmit={() => signupUser()} >
                name:<input name="name" type="text" placeholder="enter you name" onChange={(e) => onValueChange(e)} />
                <br></br>
                Email:<input name="email" type="email" placeholder="enter you email " onChange={(e) => onValueChange(e)} />
                Password:<input name="password" type="password" placeholder="enter password " onChange={(e) => onValueChange(e)} />
                <br>
                </br>
                <Button onClick={() => signupUser()} variant="primary" type="submit" >SignUp</Button>
            </form>
        </>
    )
}

export default SignUp;