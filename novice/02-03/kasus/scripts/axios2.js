const axios = require('axios');
const promisify= require('util-promisify');
/* ============================================================================================================ */
                                  /* MENGAMBIL DATA REST API MENGGUNAKAN FOR LOOP DAN PENGENDALIAN */
/* ============================================================================================================ */
const get = (resp,callback) =>{
    let result=[];
    let error =null;
    const dataUser=  resp.data;
    for(let k=0;k<dataUser.length;k++){
      if(dataUser[k].id %2 !=0){
        result[k]=dataUser[k];
      }
    }
    if (result.length==0){
      error="TIDAK ADA HASIL";
    }
      callback(error,result);
    
}

const getUserk=promisify(get);
async function getUser() {
  try {
    const response = await getUserk(axios.get('https://jsonplaceholder.typicode.com/users'));
   
  } catch (error) {
    console.error(error);
  }
}
getUser(); 

