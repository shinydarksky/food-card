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
    getFoodFromCart
}