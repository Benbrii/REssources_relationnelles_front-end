import * as ressourceConst from "../const/ressource.const";

const initState = {
    ressource: [],
    isLoading: false
};

const ressource = (state = initState, action) => {
    switch (action.type) {

        case ressourceConst.RESSOURCE_FULFILLED:
            return {
                ...state,
                ressource: action.payload.data,
                isLoading: false
            }
        case ressourceConst.RESSOURCE_PENDING:
            return {
                ...state,
                isLoading: true
            }
        case ressourceConst.RESSOURCE_REJECTED:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;

    }
}

export default ressource;