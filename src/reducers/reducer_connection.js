/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as ConnectConst from "../const/connect.const";
import * as sendUserAPI from "../api/users.api"

const initState = {
    user:null
};

const connectReducer = (state = initState, action) => {
   
    switch (action.type) {

        case ConnectConst.USER_CONNECTION:
           
            sendUserAPI.connectUser(action.payload)
            console.log(action.payload)
            return {
                user:action.payload
            }
        }

    return state
};

export default connectReducer;