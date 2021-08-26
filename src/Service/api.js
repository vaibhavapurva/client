import axios from 'axios';
import { loginRes  ,  cityResopnse ,currentResopnse} from '../actions';
const  url ="http://localhost:9000/users";
const request = axios.create({
    baseURL: 'http://localhost:9000'
});

export const userSignup =(data)=> async(dispatch , getState)=>{
    console.log("api");
    console.log(data);
    debugger;
    try{
        const response  =await axios.post(`${url}/signup`,data);
        console.log(response.data);
    }catch(err){
        console.log("err");
    }
}

export const loginUserApi = (data)=> async(dispatch , getState)=>{
    console.log("api login");
    console.log(data);
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
        console.log("hhh",city);
        const response = await axios.get(`${url}/city/?city=${city}&email=${email}`);
        console.log(response.data);
        dispatch(cityResopnse(response.data))
        // return response;
    }catch(err){
        console.log("errr")

    }
}

export const currentLocApi =(lat , log)=> async(dispatch ,getState)=>{
    console.log("api current", lat , log);
    try{
        const response = await axios.get(`${url}/current/?lat=${lat}&log=${log}`);
        console.log(response);
        dispatch(currentResopnse(response.data))
    }catch(err){
        console.log("err")
    }
}


// export const reqCurrentLocation =(state)=>async(dispatch , getState)=>{
//     const {Latitude,longitude}=state
//     try{
//         console.log(Latitude , longitude)
//         debugger
//         // const response = await axios.get(`${url}/current/?lat=${Latitude}&log${longitude}`)

//     }catch(err){
//         console.log("err")
//     }
// }

