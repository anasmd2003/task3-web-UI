// File: src/api/taskApi.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:8081/tasks';

export const getAllTasks = () => axios.get(BASE_URL);
export const getTaskById = (id: string) => axios.get(`${BASE_URL}?id=${id}`);
export const searchTasks = (name: string) => axios.get(`${BASE_URL}/search?name=${name}`);
export const createTask = (task: any) => axios.put(BASE_URL, task);
export const deleteTask = (id: string) => axios.delete(`${BASE_URL}?id=${id}`);
export const executeTask = (id: string) => axios.put(`${BASE_URL}/${id}/execute`);