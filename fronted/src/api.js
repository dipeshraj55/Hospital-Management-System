import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/hospitals';

export const createHospital = (data) => axios.post(`${API_URL}/create`, data);
export const getHospitalsByCity = (city) => axios.get(`${API_URL}?city=${city}`);
export const getHospitalById = (id) => axios.get(`${API_URL}/${id}`);
export const updateHospital = (id, data) => axios.put(`${API_URL}/update?id=${id}`, data);
export const deleteHospital = (id) => axios.delete(`${API_URL}/delete?id=${id}`);
export const addHospitalDetails = (id, data) => axios.post(`${API_URL}/details?id=${id}`, data); // Ensure this line is present

