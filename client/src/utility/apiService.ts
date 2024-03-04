import axios from 'axios';

const baseUrl = 'http://localhost:7000';
const token = JSON.parse(localStorage.getItem('token'));
const get = (url: string) => {
    return axios.get(`${baseUrl}${url}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
};

const post = (url: string, data) => {
    return axios.post(`${baseUrl}${url}`, data, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
};

const postWithImage = (url: string, data) => {
    return axios.post(`${baseUrl}${url}`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
    });
};

const authpost = (url: string, data) => {
    return axios.post(`${baseUrl}${url}`, data, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
};

const authRegister = (url: string, data) => {
    return axios.post(`${baseUrl}${url}`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const getById = (url: string, id:number) => {
    return axios.get(`${baseUrl}${url}/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
};

const put = (url: string, data) => {
    const token = localStorage.getItem('token');
    return axios.put(`${baseUrl}${url}`, data, {
        headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
    });
};

const patch = (url: string, data) => {
    const token = localStorage.getItem('token');
    return axios.patch(`${baseUrl}${url}`, data, {
        headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
    });
};

export default {
    get,
    post,
    getById,
    put,
    patch,
    authpost,
    postWithImage,
    authRegister,
};
