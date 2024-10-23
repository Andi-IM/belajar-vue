import axios from './axios'

export function getProducts(page=1){
    return axios.get(`/d783240eb9270ccf73a3?page=${page}`)
}