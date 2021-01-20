import axios from "axios";


export const fetchRegister = (email, password) =>
    axios.post(`${process.env.REACT_APP_API_URL}/user/register`, {
        email,
        password
    });