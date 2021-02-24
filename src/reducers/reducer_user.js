/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as UserConst from "../const/user.const";

const initState = {
    firstname:"John",
    lastName:"Doe"
};

const UserReducer = (state = initState, action) => {
    
    switch (action.type) {
        case UserConst.USER_GET_PROFIL_FULFILLED :
            return {
                firstname : action.payload.data.firstname,
                lastname : action.payload.data.lastname
            }
        }
    return state
};

export default UserReducer;