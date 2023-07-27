import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://comics-api.vercel.app',
});

export const getData = async (url:string,option = {}) => {
    const response = await instance.get(url,option);
    return response.data;
}