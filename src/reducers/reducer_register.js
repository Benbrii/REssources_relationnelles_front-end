/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as RegisterConst from "../const/register.const";
import * as sendUserAPI from "../api/users.api"

const initState = {
    user:null
};

const registerReducer = (state = initState, action) => {
    
    switch (action.type) {

        case RegisterConst.USER_REGISTER:
            
            sendUserAPI.sendUser(action.payload)
            
            return {
                user:action.payload
            }
        }

    return state
};

export default registerReducer;