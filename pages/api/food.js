import axios from "axios";
import { urlServer } from "./urls";

async function getFoodFromArea(area = 'all', keyword = '',order) {
    const results = await axios.post(`${urlServer}/food/area`, { area: area.trim(), keyword: keyword ,order:order})
    const { data } = results
    if (data.success) {
        return data.results
    }
    return []
}

async function searchFood(storeId = '', area = '', _id = "") {
    const results = await axios.get(`${urlServer}/food?${storeId && 'storeId=' + storeId}${area && '&area=' + area}${_id && '&_id=' + _id}`)
    const { data } = results
    if (data.success) {
        return data.results
    }
    return []
}

async function addFood(formData) {
    const response = await axios({
        method: "post",
        url: "http://localhost:8080/food",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
    })
    const { data } = response
    if (data.success) {
        return data.results
    }
    return null
}

async function editFood(formData) {
    const response = await axios({
        method: "put",
        url: "http://localhost:8080/food",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
    })
    const { data } = response
    if (data.success) {
        return data.results
    }
    return null
}

async function getPageHome() {
    // call food by api
    return []
}

async function getFoodFromCart(cardData) {
    try {
        const { data } = await axios.post(`${urlServer}/food/cart`, { listFoodId: cardData })
        if (data.success) {
            const { results } = data
            return results
        }
        else return []
    } catch (error) {
        return []
    }
}

async function getAddressProduct(_id) {
    try {
        const { data } = await axios.get(`${urlServer}/food/address?_id=${_id}`)
        if (data.success) {
            const { results } = data
            return results
        }
        else return []
    } catch (error) {
        return []
    }
}

export {
    getFoodFromArea,
    getPageHome,
    getFoodFromCart,
    searchFood,
    addFood,
    editFood,
    getAddressProduct
}