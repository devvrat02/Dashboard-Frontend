import axiosInstance from "./axios.instance";

const API_UPDATE_USER = async (userCredentials:any) => {
    try {
        const resp = await axiosInstance.post('/user/edit', userCredentials);
        return resp.data;
    } catch (err) {
        console.log(err)
        throw err
    }
}


export { API_UPDATE_USER };
