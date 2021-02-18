"use strict";
const axios = require('axios');


 class CustomeError{
  constructor(httpResponse,mess){
    this.httpResponse=httpResponse;
    this.mess=mess;
  }
  check(){
    if(this.httpResponse==400){
      return this.mess;
    }
    else if(this.httpResponse==200){
      return this.mess;
    }
    else if(this.httpResponse=300){
      return this.mess;
    }
    else{
      return "okey";
    }
  }
}


// Make a request for a user with a given ID
async function getUser() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    let kode=400;
    let messag;

    if (kode==400){
      messag =new CustomeError(kode,"Please Check Your Connection");
      throw messag.check();
    }
    else if(kode==200){
      messag =new CustomeError(kode,"Your Connection Is Good");
      throw messag.check();
    }
    else if(kode==300){
      messag =new CustomeError(kode,"Your Hardware is Soak");
      throw messag.check();
    }
    else{
      console.log(response.data);
    }
  }
  catch(error) {
    console.log(error);
  }

}
getUser(); 