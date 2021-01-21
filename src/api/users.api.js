import axios from "axios";

export const sendUser = (user) => {

    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/register`,
        credentials: 'true',
        data: user
    });
    
}
  
