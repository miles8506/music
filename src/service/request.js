import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

axiosInstance.interceptors.request.use((config => {
  return config
}), (err) => {
  throw new Error('error', err)
})

axiosInstance.interceptors.response.use((res) => {
  return res.data
}, (err) => {
  throw new Error('error', err)
})

export function requestAPI(payload) {
  return new Promise((resolve, reject) => {
    axiosInstance.request({
      ...payload
    })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}
