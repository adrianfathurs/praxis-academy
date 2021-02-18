var indexBaris=0;
let belanjaField=[]; 
let elementP=[];
let textP=[];
let textButton;
let btnIndex=[];

let no=0;

function hapus(e){
 var btnValId=document.getElementById(e).getAttribute('data-idbtn');

 
 console.log(btnValId);

}
function tambah() {
  let form;
  let box=document.querySelector("#box");
  //Ambil Value
  belanjaField[indexBaris]=document.getElementById("belanjaField").value;
  //Membuat element
  elementP[indexBaris]=document.createElement('p');
  btnIndex[indexBaris]=document.createElement('button');
  form=document.createElement('form');
  //membuat class pada button
  btnIndex[indexBaris].className="btn btn-danger";
  //Memberi attribute pada element P

  elementP[indexBaris].setAttribute("data-id",no);
  btnIndex[indexBaris].setAttribute("data-idbtn",no);
  btnIndex[indexBaris].setAttribute("id","btnHapus"+no);
  btnIndex[indexBaris].setAttribute("onclick","hapus(this.id)");
  no++;
  btnIndex[indexBaris].setAttribute("type","submit");
  form.setAttribute("onsubmit","return false");
  //Menaruh text pada teP[indexBaris]
  textP[indexBaris]=document.createTextNode(belanjaField);
  textButton=document.createTextNode("Hapus")
  
  //
  elementP[indexBaris].appendChild(textP[indexBaris]);
  btnIndex[indexBaris].appendChild(textButton);
  form.appendChild(elementP[indexBaris])
  form.appendChild(btnIndex[indexBaris])
  box.appendChild(form);
 
  
  
}



document.getElementById("btnAdd").addEventListener("click",tambah);


