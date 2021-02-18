"use strict";
const axios = require('axios');

// Make a request for a user with a given ID
async function getUser() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users'); 
    throw new Error("Internet Mati");
  }
  catch(error) {
    alert(error.message);
  }

}
getUser(); 