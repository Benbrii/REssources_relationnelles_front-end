import * as ressourceConst from "../const/ressource.const";

const initState = {
    ressources: [],
    ressource: [],
    isLoading: false
};

const ressource = (state = initState, action) => {
    switch (action.type) {

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

        case ressourceConst.GET_RESSOURCE_BY_ID_FULFILLED:
            return {
                ...state,
                ressource: action.payload.data,
                isLoading: false
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

        default:
            return state;

    }
}

export default ressource;