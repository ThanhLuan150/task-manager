
import axios from 'axios';

const API_URL = 'https://63a5721a318b23efa793a770.mockapi.io/api/products';

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};
export const createTask = async (newTask) => {
  try {
    const response = await axios.post(API_URL, newTask);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTask = async (id, updatedTask) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};
