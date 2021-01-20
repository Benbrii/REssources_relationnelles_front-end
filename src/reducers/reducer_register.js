/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as RegisterConst from "../const/register.const";

const initState = {
    firstname:null
};

const registerReducer = (state = initState, action) => {
    switch (action.type) {

        case RegisterConst.USER_REGISTER:
            return {
               firstname:action.payload
            };
        }
    return state
}

export default registerReducer;