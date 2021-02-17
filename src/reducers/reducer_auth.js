/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as ConnectConst from "../const/auth.const";

const initState = {
    isLogged:null
};


const authReducer = (state = initState, action) => {
    
    switch (action.type) {
        case ConnectConst.USER_AUTH_FULFILLED:
            return {
                isLogged:action.payload.data.islogged
            }
        }
    return state
};

export default authReducer;