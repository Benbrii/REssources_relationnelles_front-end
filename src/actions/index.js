
import * as RegisterConst from "../const/register.const";
import * as sendUserAPI from "../api/users.api"

export const registerUser = (user) => ({
    type: RegisterConst.USER_REGISTER,
    payload: sendUserAPI.sendUser(user)
});

export const test = (user) => ({
    type: RegisterConst.USER_REGISTER_TEST,
    payload: user
});