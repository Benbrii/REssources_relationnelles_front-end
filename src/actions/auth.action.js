

import * as ConnectConst from "../const/auth.const";
import {authControlAPI} from "../api/users.api"
//import * as sendUserAPI from "../api/users.api"


export const authControl = () => ({
    
    type: ConnectConst.USER_AUTH,
    payload: authControlAPI()
    
})