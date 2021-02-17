import axios from "axios";



export const sendUser = (user) => {
    
    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/register`,
        credentials: 'true',
        data: user
    })
    return response
}



export const connectAPI = (user) => {
    
    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/connexion`,
        credentials: 'true',
        data: user
    })
    
    return response
}

export const authControlAPI = () => {
    
    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/connexion/authControl`,
        credentials: 'true',
        data: ""
    })
    console.log("REPONSE",response)
    return response
}