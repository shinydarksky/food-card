import axios from 'axios'
import { urlServer } from './urls'

async function getReceiptOrder(userId) {
    try {
        const { data } = await axios.get(`${urlServer}/receipt?userId=${userId}`)
        if(data.success){
            return data.results
        }
        else return []
    } catch (error) {
        return []
    }
}

async function getOrder(status=0) {
    try {
        const { data } = await axios.get(`${urlServer}/receipt?status=${status}`)
        if(data.success){
            return data.results
        }
        else return []
    } catch (error) {
        return []
    }
}

async function getOrderShipper(shipperId,status=0) {
    try {
        const { data } = await axios.get(`${urlServer}/receipt/confirm?shipperId=${shipperId}`)
        if(data.success){
            return data.results
        }
        else return []
    } catch (error) {
        return []
    }
}

async function newRecipt(recipt) {
    try {
        const {data} = await axios.post(`${urlServer}/receipt`, recipt)
        return data
    } catch (error) {
        return error
    }
}

async function shipperConfirmReceipt(recipt) {
    try {
        await axios.post(`${urlServer}/receipt/confirm`, recipt)
    } catch (error) {
        return error
    }
}

export {
    newRecipt,
    getReceiptOrder,
    getOrder,
    getOrderShipper,
    shipperConfirmReceipt
}