import axios from "axios";

export const fetchTest = () =>
    axios.get(`${process.env.REACT_APP_API_URL}/test`);