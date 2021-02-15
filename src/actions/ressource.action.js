import * as ressourceConst from "../const/ressource.const";
import * as ressourceAPI from "../api/ressource.api";

export const getRessource = () => ({
    type: ressourceConst.RESSOURCE,
    payload: ressourceAPI.fetchRessource()
});

export const addPosteToCloud = (formData) => ({
    type: ressourceConst.ADD_RESSOURCE,
    payload: ressourceAPI.fetchAddPosteToCloud(formData)
}) 