const { default: axios } = require("axios");

"use strict";

async function getUser(){
  try {
    const data= await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(data.data);
    
  } catch (error) {
    if(error.message=="Bad Request"){
      console.log("Bad Request");
    }else if(error.message=="Authorization Required"){
      console.log("Authorization Required");
    }else if(error.message=="Forbidden"){
      console.log("Forbidden");
    }else if(error.message=="getaddrinfo ENOTFOUND jsonplaceholder.typicode.com"){
      console.log("tak terkendali");
    }else{
      console.log("uhuy");
    }
  }
}

getUser();