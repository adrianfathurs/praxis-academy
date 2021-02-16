/* const axios = require('axios'); */
/* ============================================================================================================ */
                                  /* MENGAMBIL DATA REST API MENGGUNAKAN FOR LOOP DAN PENGENDALIAN */
/* ============================================================================================================ */
 /* async function getUser() {
  try {
    let result=[];
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const dataUser= await response.data;
    for(let k=0;k<dataUser.length;k++){
      if(dataUser[k].id %2 !=0){
        result=dataUser[k];
      }
    }
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
getUser();  */

/* ============================================================================================================ */
                                      /* MENGAMBIL DATA REST API MENGGUNAKAN FILTER */
/* ============================================================================================================ */
async function getUser() {
  try {
    let result=[];
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const arrayData= await response.data;
    const dataUser= await arrayData.filter(function (el){
      return el.id%2!=0;
    });


    var box= document.getElementById('box');
    var paragrafName=[];
    var paragrafEmail=[];
    var paragrafCity=[];
    var textName=[];
    var textEmail=[];
    var textCity=[];
    
    var hr;
    for(let c=0;c<dataUser.length;c++){
      
      hr=document.createElement('hr');
      paragrafName[c]=document.createElement('p');
      paragrafName[c].classList.add('card-text');
      paragrafEmail[c]=document.createElement('p');
      paragrafEmail[c].classList.add('card-text');
      paragrafCity[c]=document.createElement('p');
      paragrafCity[c].classList.add('card-text');
      textName[c]=document.createTextNode("Name : "+dataUser[c].name);
      textEmail[c]=document.createTextNode("Email : "+dataUser[c].email);
      textCity[c]=document.createTextNode("City : "+dataUser[c].address.city);
      paragrafName[c].appendChild(textName[c]);
      paragrafEmail[c].appendChild(textEmail[c]);
      paragrafCity[c].appendChild(textCity[c]);
      box.appendChild(paragrafName[c]);
      box.appendChild(paragrafEmail[c]);
      box.appendChild(paragrafCity[c]);
      box.appendChild(hr);
    }
    
   
  } catch (error) {
    console.error(error);
  }
}


document.getElementById('btnTampil').addEventListener("click",getUser);