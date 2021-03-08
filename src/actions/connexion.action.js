
import * as RegisterConst from "../const/register.const";
import * as ConnectConst from "../const/connect.const";
import {sendUser,connectAPI,disconnectAPI,authControlAPI} from "../api/users.api"


export const authControl = () => ({
    
    type: ConnectConst.USER_AUTH,
    payload: authControlAPI()
    
})

export const registerUser = (user) => ({
   
    type: RegisterConst.USER_REGISTER,
    payload: sendUser(user)
})


export const connectUser = (user) => ({

    type: ConnectConst.USER_CONNECT,
    payload: connectAPI(user)
    
})

export const disconnectUser = () => ({

    type: ConnectConst.USER_DISCONNECT,
    payload: disconnectAPI()
    
})