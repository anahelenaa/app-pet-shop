import axios from "axios";


const API_URL = "http://localhost:8080/rest"; 

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const get = (url) => axiosInstance.get(url);
export const post = (url, data) => axiosInstance.post(url, data);
export const put = (url, data) => axiosInstance.put(url, data);
export const remove = (url) => axiosInstance.delete(url);

export default axiosInstance;