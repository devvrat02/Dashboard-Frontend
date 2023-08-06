import axiosInstance from "./axios.instance";

const API_LOGIN = async (userCredentials:any) => {
    try {
        const resp = await axiosInstance.post('/user/login', userCredentials);
        return resp.data;
    } catch (err) {
        console.log(err)
        throw err
    }
}
const API_REGISTER = async (userCredentials:any) => {
    try {
        const resp = await axiosInstance.post('/user/register', userCredentials);
        return resp.data;
    } catch (err) {
        console.log(err)
        throw err
    }
}
const API_AUTH = async () => {
    try {
        const resp = await axiosInstance.post('/user/auth');
        return resp.data;
    } catch (err) {
        console.log(err)
        throw err
    }
}

const API_LOGOUT = async () => {
    try {
        const resp = await axiosInstance.get('/user/auth');
        return resp.data;
    } catch (err) {
        throw err
    }
}


export { API_LOGIN, API_LOGOUT, API_REGISTER,API_AUTH };
