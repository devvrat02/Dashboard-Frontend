import axios from "axios";
import baseUrl from "./server";


export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
    }
});

if(localStorage.getItem("dash-token")){
    var token = localStorage.getItem("dash-token")
    axiosInstance.defaults.headers.common["x-access-token"]= token;
    // axiosInstance.defaults.headers.common["authorization"] = token;
}

export default axiosInstance;