/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as ConnectConst from "../const/connect.const";

const initState = {
    connexion:null,
    isLogged:false,

};

const connectReducer = (state = initState, action) => {
    
    switch (action.type) {
        case ConnectConst.USER_CONNECT_FULFILLED:
           
                return {
                    ...state,
                    connexion:action.payload.data.connexion
                }

        case ConnectConst.USER_AUTH_FULFILLED:
              
                return {
                    ...state,
                    isLogged:action.payload.data.islogged
                }
                       
    }
    return state
};
export default connectReducer;