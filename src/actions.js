export const SET_SIGNUP_USER = 'SET_SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_RES = 'LOGIN_RES';
export const LOGOUT = "LOGOUT";
export const CITY ="CITY";
export const CITY_RES = "CITY_RES";
export const CURRENT_lOCA ="CURRENT_LOCA";
export const CURRENT_RES = "CURRENT_RES";
export const SetSignupUser=(payload)=>{
    console.log("action" , payload);
    return{
        type:SET_SIGNUP_USER,
        payload:payload
    }

}

export const loginUser=(payload)=>{
    console.log("acion login ", payload);
    return{
        type:LOGIN_USER,
        payload:payload
    }
}

export const loginRes=(payload)=>{
    console.log("action resp",payload);
    return{
        type:LOGIN_RES,
        payload:payload
    }
}

export const logout=(payload)=>{
    return{
        type:LOGOUT,
        payload :payload
    }
}


export  const city=(payload)=>{
    console.log(payload)
    return{
        type:CITY,
        payload : payload
    }
}

export const cityResopnse=(payload)=>{
    console.log("act res ", payload)
    return{
        type:CITY_RES,
        payload:payload
    }
}

export const currentLoc=(payload)=>{
    console.log("current",payload)
    return{
        type:CURRENT_lOCA,
        payload:payload
    }
}

export const currentResopnse=(payload)=>{
    console.log("current data",payload)
    return{
        type:CURRENT_RES,
        payload:payload,
    }
}