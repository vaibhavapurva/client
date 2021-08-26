import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../actions';

const  Logout=()=>{
    const history =useHistory();
    const dispatch = useDispatch();
    useEffect(()=>{
        localStorage.removeItem('jwt_token');
        dispatch(logout());
        history.push("/login")
    })
    return(
        <>
        <h1> Logout </h1>
        </>
    )
}

export  default Logout;