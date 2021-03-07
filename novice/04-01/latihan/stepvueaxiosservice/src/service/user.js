import {
  api
} from '../plugins/axios';
export const getAllUser = async () => {
  const response = await api.get('/users');
  const dataUser = response.data;
  return dataUser;
}