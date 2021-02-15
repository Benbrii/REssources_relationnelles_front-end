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



export const connectUser = (user) => {
    
    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/connect`,
        credentials: 'true',
        data: user
    })
    
}