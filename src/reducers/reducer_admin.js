/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import * as ConnectConst from "../const/admin.const";

const initState = {
    roles: [],
    updateRole:null,

    updateCategories:null,
    categories:[],
    deleteCategories:"",

    types:[],

    years:[]
};

const adminReducer = (state = initState, action) => {
    
    switch (action.type) {
    
        case ConnectConst.ADMIN_CHANGE_ROLE_FULFILLED:
           if (action.payload.data.update === true){
                return {
                    ...state,
                    updateRole:action.payload.data.update
                }
           }else{
                return {
                    ...state,
                    updateRole:action.payload.data.update,
                    message: action.payload.data.message
                }
           }

        case ConnectConst.ADMIN_ADD_CATEGORIE_FULFILLED:
                return {
                    ...state,
                    updateCategories:action.payload.data.update
                    
                }

        case ConnectConst.ADMIN_UPDATE_FORM_FULFILLED:
                return {
                    ...state,
                    categories : Array.from(action.payload.data.categories),
                    roles : Array.from(action.payload.data.roles),
                    types: Array.from(action.payload.data.type),
                    years: action.payload.data.years
                }

        case ConnectConst.ADMIN_DELETE_CAT_FULFILLED:
                return {
                    ...state,
                    deleteCategories:action.payload.data.update
                    
                }
    }
    return state
};

export default adminReducer;

