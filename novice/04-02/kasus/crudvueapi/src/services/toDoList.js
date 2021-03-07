import {
  api
} from '@/plugins/axios'


export const getAll = async () => {
  const response = await api.get('/todos');
  const dataToDo = response.data;
  return dataToDo;
}
export const addedData = (payload) => {

  api.post('/todos', {
      name: payload.name,
      alamat: payload.alamat,
      umur: payload.umur,
    })
    .then((response) => {
      console.log(response);

    }, (error) => {
      console.log(error);
      alert("masih error");
    });
}
export const hapusData = (payload) => {
  api.delete('/todos/' + payload)
    .then((response) => {
      console.log(response);

    }, (error) => {
      console.log(error);
      alert("masih error");
    });
}
export const updateData = (payload) => {
  api.put('/todos/' +
      payload.id, {
        name: payload.data.name,
        alamat: payload.data.alamat,
        umur: payload.data.umur,
      })
    .then((response) => {
      console.log(response);

    }, (error) => {
      console.log(error);
      alert("masih error");
    });
}