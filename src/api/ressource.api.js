import axios from "axios";

export const fetchRessource = () =>
    axios.get(`${process.env.REACT_APP_API_URL}/ressources/ressource`);

export const fetchAddPosteToCloud = (formData) =>
    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/upload`,
        credentials: 'true',
        data: formData
    });

export const fetchRessourceById = id =>
    axios.get(`${process.env.REACT_APP_API_URL}/ressources/${id}`);

export const fetchCommentByRessourceId = id =>
    axios.get(`${process.env.REACT_APP_API_URL}/ressources/comments/${id}`);

export const fetchAddCommentToRessource = (commentaire, idUser, pseudoUser, idRessource) =>
    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/ressources/addcomment`,
        credentials: 'true',
        data: {
            commentaire,
            idUser,
            pseudoUser,
            idRessource
        }
    });

export const fetchAddToFavoris = (id_user, idRessource) =>
    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/ressources/addfavoris`,
        credentials: 'true',
        data: {
            id_user,
            idRessource
        }
    })

export const fetchRemoveToFavoris = (id_user, idRessource) =>
    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/ressources/removefavoris`,
        credentials: 'true',
        data: {
            id_user,
            idRessource
        }
    })

export const fetchAllFavoris = uId =>
    axios.get(`${process.env.REACT_APP_API_URL}/ressources/getallfavoris/${uId}`);
