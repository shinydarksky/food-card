import { urlServer } from "./urls";
import axios from "axios";

async function loginUser(username, password) {
    return await axios.post(`${urlServer}/auth`, {
        username: username,
        password: password
    }).then(({ data }) => {
        if (data.success) {
            localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
            return {status:true,accessToken:data.accessToken}
        }
    }).catch((err) => {
        return {status:false}
    })
}

async function getUser(accessToken) {
    return await axios.post(`${urlServer}/auth/user`, {
        accessToken: accessToken
    }).then(({ data }) => {
        if(data.success){
            return data
        }
        else throw 'Lỗi kiểm tra tài khoản'

    }).catch((err) => {
        const {data} = err.response
        return data
    })
}

function createUser(username, password1, password2) {
    axios.put(`${urlServer}/auth`, {
        username: username,
        password: password1
    })
}

export {
    loginUser,
    createUser,
    getUser,
}