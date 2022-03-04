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

async function createUser(username, password) {
    return await axios.put(`${urlServer}/auth`, {
        username: username,
        password: password
    }).then(({data})=>{
        localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
        return data
    })
}

export {
    loginUser,
    createUser,
    getUser,
}