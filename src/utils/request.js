import axios from "axios";


const service = axios.create({
  baseURL: process.env.AUTH_API_URL,
  timeout: 10000,
});

service.interceptors.request.use((config) => {
  // Add X-Access-Token header to every request, you can add other custom headers here
  // if (UserModule.token) {
  //   config.headers['X-Access-Token'] = UserModule.token
  // }
  // config.headers['Access-Control-Allow-Origin'] = "*"
  return config
},
  (error) => {
    Promise.reject(error)
  })

service.interceptors.response.use((response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  })
// service

export default service