import axios from "axios";


axios.defaults.baseURL = 'https://drf-api-setup.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true