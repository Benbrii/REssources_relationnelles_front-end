/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as ConnectConst from "../const/connect.const";

const initState = {
    connexion: false,
    isLogged: false,
    authlevel: 1,
    user: [],
    thetoken: ""
};

const connectReducer = (state = initState, action) => {

    switch (action.type) {
        case ConnectConst.USER_CONNECT_FULFILLED:

            return {
                ...state,
                connexion: action.payload.data.connexion,
                authlevel: action.payload.data.authlevel,
                user: action.payload.data.user,
                thetoken: action.payload.data.token
            }

        case ConnectConst.USER_AUTH_FULFILLED:

            if (action.payload.data.islogged === false) {
                return {
                    ...state,
                    isLogged: false,
                    connected: false
                }
            } else {
                return {
                    ...state,
                    isLogged: true,
                    connected: true
                }
            }


        case ConnectConst.USER_DISCONNECT_FULFILLED:

            return {
                isLogged: false,
                connexion: false,
            }

    }
    return state
};
export default connectReducer;