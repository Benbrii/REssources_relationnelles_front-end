/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as ConnectConst from "../const/connect.const";

const initState = {
    isLogged: false,
    authlevel: 1,
    user: [],
    thetoken: ""
};

const connectReducer = (state = initState, action) => {

    switch (action.type) {
        case ConnectConst.USER_CONNECT_FULFILLED:

            return {
                ...state,
                isLogged: action.payload.data.isLogged,
                authlevel: action.payload.data.authlevel,
                user: action.payload.data.user,
                thetoken: action.payload.data.token
            }

            case ConnectConst.USER_CONNECT_REJECTED:
            console.log("action.payload",action.payload)
            return {
                ...state,
                isLogged: false,
                thetoken: ""
            }

        case ConnectConst.USER_AUTH_FULFILLED:
            if (action.payload.data.islogged === true) {
               
                return {
                    ...state,
                    isLogged: true,
                    connexion: true
                }
            } else {
                
                return {
                    
                    ...state,
                    isLogged: false,
                    connexion: false

                }
            }

        case ConnectConst.USER_AUTH_REJECTED:
           
               return {
                    ...state,
                    isLogged: false,
                    connexion: false
                }
           
            

        case ConnectConst.USER_DISCONNECT_FULFILLED:

            return {
                ...state,
                isLogged: false,
                connexion: false
            }

    }

    return state
};
export default connectReducer;