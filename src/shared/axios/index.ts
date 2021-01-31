import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const configJson: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json'
  }
}

export const Axios = axios
export const Api: AxiosInstance = axios.create(configJson)

Api.interceptors.response.use(undefined, err => {
  const error = err.response
  return error
})

Axios.interceptors.response.use(undefined, err => {
  const error = err.response
  return error
})
