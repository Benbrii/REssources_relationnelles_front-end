import axios from "axios";

export const fetchRessource = () =>
    axios.get(`${process.env.REACT_APP_API_URL}/ressource/ressource`);