import * as ressourceConst from "../const/ressource.const";
import * as ressourceAPI from "../api/ressource.api";

export const getRessource = () => ({
    type: ressourceConst.RESSOURCE,
    payload: ressourceAPI.fetchRessource()
});