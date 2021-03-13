import axios from "axios";

export const updateAdminFormAPI = () => {

    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/admin/UpdateAdminForm`,
        credentials: 'true',
        data: ""
    })
    return response
}

export const filter = () => {

    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/admin/UpdateAdminForm`,
        credentials: 'true',
        data: ""
    })
    return response
}

export const changeRoleAPI = (user) => {
    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/admin/changeRole`,
        credentials: 'true',
        data: user
    })
    return response
}

export const addCategorieAPI = (categorie) => {
    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/admin/addCategorie`,
        credentials: 'true',
        data: categorie
    })

    return response
}


export const deleteCatAPI = (categorie) => {
    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/admin/deleteCat`,
        credentials: 'true',
        data: categorie
    })
    return response
}

export const accountActivationAPI = (user) => {
    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/admin/AccountActivation`,
        credentials: 'true',
        data: user
    })
    return response
}

export const accountDesactivationAPI = (user) => {
    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/admin/AccountDesactivation`,
        credentials: 'true',
        data: user
    })
    return response
}


export const getStatAPI = ({annee,categorie,type}) => {
    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/admin/getStat`,
        credentials: 'true',
        data: {annee,categorie,type}
    })
    return response
}