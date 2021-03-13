
import * as RegisterConst from "../const/register.const";
import * as ConnectConst from "../const/connect.const";
import * as MessageConst from "../const/message.const";
import * as userConst from "../const/user.const";
import {sendUser,connectAPI,disconnectAPI,authControlAPI} from "../api/users.api"


export const authControl = (user) => (dispatch) => {

  return authControlAPI().then(
  (response) => {
      dispatch({
          type: ConnectConst.USER_AUTH_FULFILLED,
          payload: response
      });
  }).catch(
    (error) => {
      dispatch({
        type: ConnectConst.USER_AUTH_REJECTED
      });
    }
  );
};


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
          type: MessageConst.SET_ERROR_MESSAGE,
          payload: error.response.data.message
        });
      }
    );
  };


export const disconnectUser = (user) => (dispatch) => {

  return disconnectAPI().then(
  (response) => {
      dispatch({
          type: ConnectConst.USER_DISCONNECT_FULFILLED,
          payload: response
      });
      dispatch({
        type: userConst.SET_USER_ROLE,
        payload: 1
      });

  }).catch(
    (error) => {
      dispatch({
        type: ConnectConst.USER_DISCONNECT_REJECTED
      });
    }
  );
};


export const connectUser = (user) => (dispatch) => {
    return connectAPI(user).then(
      
    (response) => {
      
        dispatch({
            type: ConnectConst.USER_CONNECT_FULFILLED,
            payload: response.data.isLogged
        });
        dispatch({
          type: userConst.SET_USER,
          payload: response.data
      });

    }).catch(
      (error) => {
        console.log("error: ",error)
        dispatch({
          type: ConnectConst.USER_CONNECT_REJECTED
        });
  
        dispatch({
          type: MessageConst.SET_ERROR_MESSAGE,
          payload: error.response.data.message
        });
      }
    );
  };