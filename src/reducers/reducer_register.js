/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as RegisterConst from "../const/register.const";

const initState = {
    validation:true
};

const registerReducer = (state = initState, action) => {
    
    switch (action.type) {
        case RegisterConst.USER_REGISTER_FULFILLED:
            return {
                ...state,
                validation:action.payload.data.validation
            }
        }
    return state
};

export default registerReducer;