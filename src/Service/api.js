import axios from 'axios';
import { loginRes  ,  cityResopnse ,currentResopnse , historySet} from '../actions';
const  url ="http://localhost:9000/users";
const request = axios.create({
    baseURL: 'http://localhost:9000'
});

export const userSignup =(data)=> async(dispatch , getState)=>{
    try{
        const response  =await axios.post(`${url}/signup`,data);
        console.log(response.data);
    }catch(err){
        console.log("err");
    }
}

export const loginUserApi = (data)=> async(dispatch , getState)=>{
    try{
        const response = await axios.post(`${url}/login`,data);
        console.log(response.data);
        window.localStorage.setItem('jwt_token', response.data.token);
        window.localStorage.setItem('user_email', response.data.email);
        dispatch(loginRes(response.data));
    }catch(err){
        console.log("err");
    }
}

export const weatherByCity = (city , email)=> async(dispatch , getState)=>{
    try{
        const response = await axios.get(`${url}/city/?city=${city}&email=${email}`);
        console.log(response.data);
        dispatch(cityResopnse(response.data))
        // return response;
    }catch(err){
        console.log("errr")

    }
}

export const currentLocApi =(lat , log)=> async(dispatch ,getState)=>{
    try{
        const response = await axios.get(`${url}/current/?lat=${lat}&log=${log}`);
        console.log(response);
        dispatch(currentResopnse(response.data))
    }catch(err){
        console.log("err")
    }
}


export const historyGet = (email)=> async(dispatch , getState)=>{

    try{
        const response = await request.get(`/users/history/${email}`);
        console.log(response);
        dispatch(historySet(response.data));
    }catch(err){    
        console.log("err");
    }
}