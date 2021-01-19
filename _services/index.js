import axios from 'axios'
import config from '../config'

const login = ({ username, password }) => {
    return axios.post(config.endpoint.login, { username, password }).then(({ data }) => {
        return data
    }).catch(err => {
        console.log(err)
    })
}
const getImages = (authToken) => {

    let additionalConfig = {
        headers: {
            Authorization: "Bearer " + authToken,
        }
    }
    return axios.get(config.endpoint.images, additionalConfig).then(({ data }) => {
        return data
    }).catch(err => {
        console.log(err)
    })
}
export default {
    login,
    getImages
}