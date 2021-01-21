/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as RegisterConst from "../const/register.const";

const initState = {
    user:null
};

const registerReducer = (state = initState, action) => {
    switch (action.type) {

        case RegisterConst.USER_REGISTER:
            return {

                user:action.payload
                
            };

        case RegisterConst.USER_REGISTER_TEST:
            return {

                user:action.payload
                
            };
           
        }
    return state
};

export default registerReducer;