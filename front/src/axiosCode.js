import axios from 'axios';

const axiosCode = axios.create({
    baseURL: 'http://localhost:8000'
});

export default axiosCode;