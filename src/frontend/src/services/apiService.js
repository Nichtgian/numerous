import axios from "axios";
import { TokenService, StorageIdentifier } from "./tokenService";

export const ApiService = {
    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },

    setHeader() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken(StorageIdentifier.tokenKey)}`;
    },

    removeHeader() {
        axios.defaults.headers.common = {};
    },

    get(resource) {
        return axios.get(resource);
    },

    post(resource, data) {
        return axios.post(resource, data);
    },

    put(resource, data) {
        return axios.put(resource, data);
    },

    delete(resource) {
        return axios.delete(resource);
    },

    customRequest(data) {
        return axios(data);
    }
};