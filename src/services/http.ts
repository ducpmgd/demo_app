import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "content-type": "application/json",
      },
  });

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    if(localStorage.getItem("auth")){
      const token = JSON.parse(localStorage.getItem("auth")||"").token
      if(token){
        config.headers['Authorization'] = 'Bearer ' + token
      }
    }
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
      window.alert(error.response.data.message)
      return Promise.reject(error)
    }
  )
export default axiosInstance

