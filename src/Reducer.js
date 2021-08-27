import { LOGIN_USER, SET_SIGNUP_USER ,LOGIN_RES, LOGOUT , CITY  , CITY_RES , CURRENT_lOCA, CURRENT_RES, HISTORY_SET} from "./actions";

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
    history:[],
    weather:[]
}

function Reducer(state = initialState ,action){
    switch(action.type){
        case SET_SIGNUP_USER:
            return{
                ...state,
                signup:action.payload,
            }
        case  LOGIN_USER:
            return{
                ...state,
                login:action.payload,
            }
        case LOGIN_RES:
            return{
                token:action.payload.token,
                email:action.payload.email
            }
        case LOGOUT:
            return{
                token:null,
            }
        case CITY:
            return{
                ...state,
                city:action.payload.city,
            }
        case CITY_RES:
            return{
                ...state,
                cityResopnse:action.payload,
            }
        case CURRENT_lOCA:
            return{
                ...state,
                lat:action.payload.lat,
                log:action.payload.log,
            }

        case CURRENT_RES:
            return{
                ...state,
                cur:action.payload,
            }
         case HISTORY_SET:
             console.log("=============")
             console.log("try kr",action.payload.weather)
             return{
                 ...state,
                 history:action.payload,
             }
        default:
            return state
    }
}
export default Reducer;