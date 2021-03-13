/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as ConnectConst from "../const/connect.const";

const initState = {
    isLogged: false,
    authlevel: 1
};

const connectReducer = (state = initState, action) => {

    switch (action.type) {
        case ConnectConst.USER_CONNECT_FULFILLED:

            return {
                ...state,
                isLogged: action.payload
            }

        case ConnectConst.USER_CONNECT_REJECTED:
            return {
                ...state,
                isLogged: false
            }

        case ConnectConst.USER_AUTH_FULFILLED:
            
                return {
                    ...state,
                    isLogged: true,
                    connexion: true
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