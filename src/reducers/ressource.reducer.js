import * as ressourceConst from "../const/ressource.const";

const initState = {
    ressources: [],
    ressource: [],
    isLoading: false,
    comments: [],
    favoris: [],
    ressource_Date: "",
};

const ressource = (state = initState, action) => {
    switch (action.type) {

        // GET RESSOURCES

        case ressourceConst.RESSOURCE_FULFILLED:

            return {
                ...state,
                ressources: action.payload.data,
                isLoading: false
            };
        case ressourceConst.RESSOURCE_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case ressourceConst.RESSOURCE_REJECTED:
            return {
                ...state,
                error: action.payload
            };

        // ADD RESSOURCE

        case ressourceConst.ADD_RESSOURCE_FULFILLED:
            return {
                ...state,
                newUrl: action.payload.data,
                isLoading: false
            };
        case ressourceConst.ADD_RESSOURCE_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case ressourceConst.ADD_RESSOURCE_REJECTED:
            return {
                ...state,
                error: action.payload
            };

        // GET RESSOURCE BY ID

        case ressourceConst.GET_RESSOURCE_BY_ID_FULFILLED:
            let ressourceDate = new Date(action.payload.data[0].date_envoie).toLocaleDateString("fr-FR");
            return {
                ...state,
                ressource: action.payload.data,
                isLoading: false,
                ressource_Date: ressourceDate
            };
        case ressourceConst.GET_RESSOURCE_BY_ID_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case ressourceConst.GET_RESSOURCE_BY_ID_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        // GET COMMENTS BY RESSOURCE ID

        case ressourceConst.GET_COMMENT_BY_RESSOURCE_ID_FULFILLED:
            return {
                ...state,
                comments: action.payload.data,
                isLoading: false
            };
        case ressourceConst.GET_COMMENT_BY_RESSOURCE_ID_PENDING:
            return {
                ...state,
                isLoading: true,
            };
        case ressourceConst.GET_COMMENT_BY_RESSOURCE_ID_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        // GET FAVORIS BY USER ID

        case ressourceConst.GET_ALL_FAVORIS_BY_USER_ID_FULFILLED:
            return {
                ...state,
                favoris: action.payload.data,
                isLoading: false
            };
        case ressourceConst.GET_ALL_FAVORIS_BY_USER_ID_PENDING:
            return {
                ...state,
                isLoading: true,
            };
        case ressourceConst.GET_ALL_FAVORIS_BY_USER_ID_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;

    }
}

export default ressource;