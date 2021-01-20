
import * as RegisterConst from "../const/register.const";


export const registerUser = (firstName) => ({
    type: RegisterConst.USER_REGISTER,
    payload: firstName
});