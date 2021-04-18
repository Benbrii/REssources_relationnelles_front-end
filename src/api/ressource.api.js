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


export const fetchRessourceById = ({id_user,id}) => {
    console.log("fetchRessourceById", id_user," ",id)
    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/ressources/getRessourceById`,
        credentials: 'true',
        data: {id_user,id}
    })

    return response
}

export const fetchCommentByRessourceId = id =>

    axios.get(`${process.env.REACT_APP_API_URL}/ressources/comments/${id}`);

export const fetchAddCommentToRessource = (commentaire, idUser, idRessource) =>
    
    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/ressources/addcomment`,
        credentials: 'true',
        data: {
            commentaire, idUser,idRessource
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
   

export const fetchDeleteRessourceById = (id) =>
axios({
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/ressources/fetchDeleteRessourceById`,
    credentials: 'true',
    data: id
})

export const fetchAllFavoris = uId =>
    axios.get(`${process.env.REACT_APP_API_URL}/ressources/getallfavoris/${uId}`);