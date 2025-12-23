import axios from "axios";

const authenticated = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 1000,
    withCredentials: true,
})



// when you want to refetch the access token using a refresh token, you may use this.
authenticated.interceptors.response.use(function onFulfilled(response){
    return response;
}, async function onRejected(error){
    return Promise.reject(error);
})

export default authenticated;