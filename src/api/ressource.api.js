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