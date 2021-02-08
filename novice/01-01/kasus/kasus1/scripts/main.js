document.getElementById("btnSubmit").addEventListener("click", show);

function show() {
  var namaku=document.getElementById("inputNama").value;
  document.getElementById("nama").innerHTML=namaku;//output
  var alamatku=document.getElementById("inputAlamat").value;
  document.getElementById("alamat").innerHTML=alamatku;//output
  var pendidikanku=document.getElementById("inputPendidikan").value;
  document.getElementById("pendidikan").innerHTML=pendidikanku;//output
}