import {
  api
} from '../plugins/axios'

export const verifyRegister = async (payload) => {
  try {
    var response = await api.post('/register', payload);
    var data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export const verifyLogin = async (payload) => {
  try {
    var response = await api.post('/login', payload);
    var data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
export const setRole = async (payload) => {
  try {
    var response = await api.post('/setrole', payload);
    var data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}