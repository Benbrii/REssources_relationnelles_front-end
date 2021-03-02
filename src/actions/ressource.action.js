import * as ressourceConst from "../const/ressource.const";
import * as ressourceAPI from "../api/ressource.api";

export const getRessource = () => ({
    type: ressourceConst.RESSOURCE,
    payload: ressourceAPI.fetchRessource()
});

export const addPosteToCloud = (formData) => ({
    type: ressourceConst.ADD_RESSOURCE,
    payload: ressourceAPI.fetchAddPosteToCloud(formData)
});

export function getRessourceById(id) {
    return {
        type: ressourceConst.GET_RESSOURCE_BY_ID,
        payload: ressourceAPI.fetchRessourceById(id)
    }
}

export function getCommentsByRessourceId(id) {
    return {
        type: ressourceConst.GET_COMMENT_BY_RESSOURCE_ID,
        payload: ressourceAPI.fetchCommentByRessourceId(id)
    }
}