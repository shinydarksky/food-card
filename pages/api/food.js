import axios from "axios";
import { urlServer } from "./urls";

async function getFoodFromArea(area='all', keyword='') {
    const results = await axios.post(`${urlServer}/food/area`, { area: area.trim(), keyword: keyword })
    const { data } = results
    if(data.success){
        return data.results
    }
    return []
}

async function searchFood(storeId='',area='') {
    const results = await axios.get(`${urlServer}/food?${storeId&&'storeId='+storeId}${area&&'&area='+area}`)
    const { data } = results
    if(data.success){
        return data.results
    }
    return []
}

async function addFood(formData){
    const response = await axios({
        method: "post",
        url: "http://localhost:8080/food",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
    })
    const { data } = response
    if(data.success){
        return data.results
    }
    return null
}

async function getPageHome() {
    // call food by api
    return []
}

async function getFoodFromCart() {
    // call food by api
    return []
}

export {
    getFoodFromArea,
    getPageHome,
    getFoodFromCart,
    searchFood,
    addFood
}