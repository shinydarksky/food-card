import { urlServer } from "./urls";
import axios from "axios";


async function getListUser(role=''){
    return await axios.get(`${urlServer}/user?type=${role}`).then(({data})=>{
        return data
    }).catch(err=>err)
}

async function updateUser(_id,data){
    return await axios.post(`${urlServer}/user`,{_id:_id,data}).then(({data})=>{
        return data
    }).catch(err=>err)
}

async function getUserInfor(_id){
    return await axios.get(`${urlServer}/user/infor?id=${_id}`).then(({data})=>{
        return data
    }).catch(err=>err)
}

async function updateUserInfor(_id,data){
    return await axios.post(`${urlServer}/user/infor`,{_id:_id,data}).then(({data})=>{
        return data
    }).catch(err=>err)
}


export {
    getListUser,
    updateUser,
    getUserInfor,
    updateUserInfor
}