import axios from 'axios'
import { urlServer } from './urls'

async function getListAddress(userId){
    const response = await axios.get(`${urlServer}/address?userId=${userId}`)
    .then(({ data }) => {
        const { results } = data
        return results
    }).catch(err => [])

    return response 
}


async function addAddress(newAddress){
    await axios.post(`${urlServer}/address`,newAddress)
}

export {
    getListAddress,
    addAddress
}