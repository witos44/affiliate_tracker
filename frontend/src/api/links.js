import axiosInstance from './axios';

export const getLinks = () => axiosInstance.get('/links/');
export const createLink = (data) => axiosInstance.post('/links/', data);
export const deleteLink = (id) => axiosInstance.delete(`/links/${id}/`);