var indexBaris=0;
let belanjaField=[];
let elementP;
let textP;
let textButton;
let btnIndex;
let no=0;
let form;
let hr;

//fungsi untuk membuat Element
const createElement=()=>{
  elementP=document.createElement('p');
  btnIndex=document.createElement('button');
  form=document.createElement('form');
  hr=document.createElement('hr');
  
}
//fungsi untuk mengeset Atribut Element
const setAtribute=()=>{
  elementP.setAttribute("data-id",no);
  hr.setAttribute("id","hr"+no);
  elementP.setAttribute("id","paragraf"+no);
  form.setAttribute("id","form"+no);
  btnIndex.setAttribute("data-idbtn",no);
  btnIndex.setAttribute("id","btnHapus"+no);
  btnIndex.setAttribute("onclick","hapus(this.id)");
  btnIndex.setAttribute("type","submit");
  form.setAttribute("onsubmit","return false");
}
//fungsi untuk membuat suatu text node
const createText=()=>{
  textP=document.createTextNode(belanjaField[indexBaris]);
  textButton=document.createTextNode("Hapus");
}
//fungsi untuk menyusun block html
const createBlockHtml=()=>{
  elementP.appendChild(textP);
  btnIndex.appendChild(textButton);
  form.appendChild(elementP)
  form.appendChild(btnIndex)
  box.appendChild(form);  
  box.appendChild(hr);  
}


function hapus(e){
  var btnValId=document.getElementById(e).getAttribute('data-idbtn');
  var btnVal=document.getElementById(e);
  var paragDelete=document.getElementById('paragraf'+btnValId);
  var formDelete=document.getElementById('form'+btnValId);
  var hr=document.getElementById('hr'+btnValId);
  
  paragDelete.remove();
  btnVal.remove();
  formDelete.remove();
  hr.remove();
  console.log(btnValId);
}

function tambah() {
  let cek=null;
  //Ambil Value
  belanjaField[indexBaris]=document.getElementById("belanjaField").value;
  console.log(indexBaris);
  console.log(belanjaField[indexBaris]);
  cek=belanjaField[indexBaris];
  let box=document.querySelector("#box");
  if(cek!=null){
      //Membuat element
        createElement();
      //membuat class pada button
        btnIndex.className="btn btn-danger";
      //Memberi attribute pada element P,btn,form
        setAtribute();
      //agar index selalu bertambah
        no++;
      //Menaruh text pada teP[indexBaris]
        createText();
      //menyusun block element html
        createBlockHtml();
      //cara mereset isi dari text input
        belanjaField[indexBaris]=document.getElementById("belanjaField").value=" ";
    }else{
      alert("Input kan dulu Daftar Belanjamu");
    }
  
    indexBaris++;
}


document.getElementById("btnAdd").addEventListener("click",tambah);


