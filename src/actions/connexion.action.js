
import * as RegisterConst from "../const/register.const";
import * as ConnectConst from "../const/connect.const";
import * as MessageConst from "../const/message.const";
import {sendUser,connectAPI,disconnectAPI,authControlAPI} from "../api/users.api"


export const authControl = () => ({
    
    type: ConnectConst.USER_AUTH,
    payload: authControlAPI()
    
})


export const registerUser = (user) => (dispatch) => {
    return sendUser(user).then(
    (response) => {
        dispatch({
            type: RegisterConst.USER_REGISTER_FULFILLED,
            payload: response
        });
    }).catch(
      (error) => {
       
        dispatch({
          type: RegisterConst.USER_REGISTER_REJECTED
        });
  
        dispatch({
          type: MessageConst.SET_MESSAGE,
          payload: error.response.data.message
        });
      }
    );
  };

export const disconnectUser = () => ({

    type: ConnectConst.USER_DISCONNECT,
    payload: disconnectAPI()
    
})


export const connectUser = (user) => (dispatch) => {
    return connectAPI(user).then(
    (response) => {
        dispatch({
            type: ConnectConst.USER_CONNECT_FULFILLED,
            payload: response
           
        });
    }).catch(
      (error) => {
       
        dispatch({
          type: ConnectConst.USER_CONNECT_REJECTED
        });
  
        dispatch({
          type: MessageConst.SET_MESSAGE,
          payload: error.response.data.message
        });
      }
    );
  };