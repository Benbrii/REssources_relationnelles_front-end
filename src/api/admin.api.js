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

export const changeRoleAPI = (user) => {
    console.log("changeRoleAPI ",user)
    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/admin/changeRole`,
        credentials: 'true',
        data: user
    })
    return response
}

export const addCategorieAPI = (categorie) => {
    console.log("categorie",categorie)
    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/admin/addCategorie`,
        credentials: 'true',
        data: categorie
    })

    return response
}


export const deleteCatAPI = (categorie) => {
    console.log("categorie",categorie)
    const response = axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/admin/deleteCat`,
        credentials: 'true',
        data: categorie
    })
    return response
}

