import * as ConnectConst from "../const/admin.const";
import {updateAdminFormAPI,changeRoleAPI,addCategorieAPI,deleteCatAPI} from "../api/admin.api"



export const changeRole = (user) => ({
    
    type: ConnectConst.ADMIN_CHANGE_ROLE,
    payload: changeRoleAPI(user)
    
})

export const addCategorie = (categorie) => ({
    
    type: ConnectConst.ADMIN_CHANGE_ROLE,
    payload: addCategorieAPI(categorie)
    
})


export const updateAdminForm = () => ({
    
    type: ConnectConst.ADMIN_UPDATE_FORM,
    payload: updateAdminFormAPI()
    
})


export const deleteCat = (categorie) => ({
    
    type: ConnectConst.ADMIN_DELETE_CAT,
    payload: deleteCatAPI(categorie)
    
})

