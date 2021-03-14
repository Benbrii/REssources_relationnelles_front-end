/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as userConst from "../const/user.const";

const initState = {
    authlevel: 1,
    user: {
        id:0,
        pseuso:"invité",
        id_role:1
    }
};

const userReducer = (state = initState, action) => {
    
    switch (action.type) {
        case userConst.SET_USER_ROLE:
            return {
                ...state,
                authlevel: action.payload,
            }
        case userConst.SET_USER:
            console.log("action.payload.user: ",action.payload.user)
            return {
                ...state,
                authlevel:action.payload.user.id_role,
                user: action.payload.user
            }
        
            
    }

    return state
};
export default userReducer;