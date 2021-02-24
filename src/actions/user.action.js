
import * as UserConst from "../const/user.const";
import {getProfilAPI} from "../api/users.api"


export const getProfil = () => ({
    
    type: UserConst.USER_GET_PROFIL,
    payload: getProfilAPI()
    
})
