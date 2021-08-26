import { LOGIN_USER, SET_SIGNUP_USER ,LOGIN_RES, LOGOUT , CITY  , CITY_RES , CURRENT_lOCA, CURRENT_RES} from "./actions";

const initialState={
    signup:{},
    login:{},
    token:localStorage.getItem("jwt_token"),
    email:localStorage.getItem("user_email"),
    city:"",
    cityResopnse:[],
    lat:"",
    log:"",
    cur:[],
}

function Reducer(state = initialState ,action){
    console.log("REDUCE",action.type)
    switch(action.type){
        case SET_SIGNUP_USER:
            console.log("red",action.payload)
            return{
                ...state,
                signup:action.payload,
            }
        case  LOGIN_USER:
            console.log("red login ", action.payload)
            return{
                ...state,
                login:action.payload,
            }
        case LOGIN_RES:
            console.log("aaaaaaaaaaaaaaaa")
            console.log("red gg",action.payload.token)
            return{
                token:action.payload.token,
                email:action.payload.email
            }
        case LOGOUT:
            console.log("red logout");
            return{
                token:null,
            }
        case CITY:
            console.log("red City" , action.payload.city);
            return{
                ...state,
                city:action.payload.city,
            }
        case CITY_RES:
            console.log("red res")
            console.log("red res", action.payload)
            return{
                ...state,
                cityResopnse:action.payload,
            }
        case CURRENT_lOCA:
            console.log("cu",action.payload)
            return{
                ...state,
                lat:action.payload.lat,
                log:action.payload.log,
            }

        case CURRENT_RES:
            console.log("rescu",action.payload)
            return{
                ...state,
                cur:action.payload,
            }
        default:
            return state
    }
}
export default Reducer;