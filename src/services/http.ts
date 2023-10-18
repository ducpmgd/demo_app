import axios from 'axios'
// import LocalStorageService from './services/storage/localstorageservice'
// import router from './router/router'

// LocalStorageService
// const localStorageService = LocalStorageService.getService()

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "content-type": "application/json",
      },
  });

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // const token = localStorageService.getAccessToken()
    // if (token) {
    //   config.headers['Authorization'] = 'Bearer ' + token
    // }
    // config.headers['Content-Type'] = 'application/json';
    return config
  },
  error => {
    Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
    response => {
      return response.data
    },
    function (error) {
      return Promise.reject(error)
    }
  )
export default axiosInstance

