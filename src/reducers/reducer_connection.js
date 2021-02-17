/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as ConnectConst from "../const/connect.const";

const initState = {
    isLogged:null,
    logIn:null
};

const connectReducer = (state = initState, action) => {
    
    switch (action.type) {
        case ConnectConst.USER_CONNECT_FULFILLED:
            return {
               
                }
                    
    }
            
    return state
};
export default connectReducer;