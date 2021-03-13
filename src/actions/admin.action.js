import * as AdminConst from "../const/admin.const";
import {updateAdminFormAPI,changeRoleAPI,addCategorieAPI,deleteCatAPI,accountActivationAPI,accountDesactivationAPI,getStatAPI} from "../api/admin.api"
import * as MessageConst from "../const/message.const";
import * as StatConst from "../const/stat.const";

export const changeRole = (user) => (dispatch) => {
    return changeRoleAPI(user).then(
    (response) => {
        dispatch({
            type: AdminConst.ADMIN_CHANGE_ROLE_FULFILLED,
            payload: response
        });

        dispatch({
            type: MessageConst.SET_GREAT_MESSAGE,
            payload: response.data.message
        });

    }).catch(
      (error) => {
       
        dispatch({
          type: MessageConst.SET_ERROR_MESSAGE,
          payload: error.response.data.message
        });
      }
    );
  };


export const addCategorie = (categorie) => (dispatch) => {
    return addCategorieAPI(categorie).then(
    (response) => {
        
        dispatch({
            type: MessageConst.SET_GREAT_MESSAGE,
            payload: response.data.message
        });

    }).catch(
      (error) => {
       
        dispatch({
          type: MessageConst.SET_ERROR_MESSAGE,
          payload: error.response.data.message
        });
      }
    );
  };


export const updateAdminForm = () => ({
    
    type: AdminConst.ADMIN_UPDATE_FORM,
    payload: updateAdminFormAPI()
    
})

export const deleteCat = (categorie) => (dispatch) => {
    return deleteCatAPI(categorie).then(
    (response) => {
        
        dispatch({
            type: MessageConst.SET_GREAT_MESSAGE,
            payload: response.data.message
        });

    }).catch(
      (error) => {
       
        dispatch({
          type: MessageConst.SET_ERROR_MESSAGE,
          payload: error.response.data.message
        });
      }
    );
  };

export const accountActivation = (user) => (dispatch) => {
  return accountActivationAPI(user).then(
  (response) => {
     
      dispatch({
          type: MessageConst.SET_GREAT_MESSAGE,
          payload: response.data.message
      });

  }).catch(
    (error) => {
     
      dispatch({
        type: MessageConst.SET_ERROR_MESSAGE,
        payload: error.response.data.message
      });
    }
  );
};


export const accountDesactivation = (user) => (dispatch) => {
  return accountDesactivationAPI(user).then(
  (response) => {
     
      dispatch({
          type: MessageConst.SET_GREAT_MESSAGE,
          payload: response.data.message
      });

  }).catch(
    (error) => {
     
      dispatch({
        type: MessageConst.SET_ERROR_MESSAGE,
        payload: error.response.data.message
      });
    }
  );
};

export const getStat = ({annee,categorie,type}) => ({
    
  type: StatConst.GET_STAT,
  payload: getStatAPI({annee,categorie,type})
  
})
