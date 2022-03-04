import { urlServer } from "./urls";
import axios from "axios";


async function getListUser(){
    return await axios.get(`${urlServer}/user`).then(({data})=>{
        return data
    }).catch(err=>err)
}

async function updateUser(_id,data){
    return await axios.post(`${urlServer}/user`,{_id:_id,data}).then(({data})=>{
        return data
    }).catch(err=>err)
}


export {
    getListUser,
    updateUser
}