
import * as RegisterConst from "../const/register.const";
import * as ConnectConst from "../const/connect.const";
import {sendUser} from "../api/users.api"
//import * as sendUserAPI from "../api/users.api"

export const registerUser = (user) => ({
   
    type: RegisterConst.USER_REGISTER,
    payload: sendUser(user)
});


export const connectUser = (user) => ({

    type: ConnectConst.USER_CONNECTION,
    payload: user
   
});