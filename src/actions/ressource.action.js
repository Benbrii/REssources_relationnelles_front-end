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

export function getRessourceById({id_user,id}) {
    return {
        type: ressourceConst.GET_RESSOURCE_BY_ID,
        payload: ressourceAPI.fetchRessourceById({id})
    }
}

export function getCommentsByRessourceId(id) {
    return {
        type: ressourceConst.GET_COMMENT_BY_RESSOURCE_ID,
        payload: ressourceAPI.fetchCommentByRessourceId(id)
    }
}

export const addCommentToRessource = (commentaire, idUser, idRessource) => ({
    type: ressourceConst.ADD_COMMENT_TO_RESSOURCE,
    payload: ressourceAPI.fetchAddCommentToRessource(commentaire, idUser,idRessource)
})

export const addRessourceToFavoris = (id_user, idRessource) => ({
    type: ressourceConst.ADD_TO_FAVORIS,
    payload: ressourceAPI.fetchAddToFavoris(id_user, idRessource)
})

export const removeRessourceToFavoris = (id_user, idRessource) => ({
    type: ressourceConst.REMOVE_FROM_FAVORIS,
    payload: ressourceAPI.fetchRemoveToFavoris(id_user, idRessource)
});

export const getFavorisByUserId = (uId) => ({
    type: ressourceConst.GET_ALL_FAVORIS_BY_USER_ID,
    payload: ressourceAPI.fetchAllFavoris(uId)
})

export const deleteRessourceById = (id) => ({
    type: ressourceConst.DELETE_RESSOURCE_BY_ID,
    payload: ressourceAPI.fetchDeleteRessourceById(id)
})