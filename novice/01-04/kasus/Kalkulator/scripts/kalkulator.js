var matriks1Baris=prompt("masukan Jumlah Baris dalam Matriks1 :");
var matriks1Kolom=prompt("Masukan Jumlah Kolom dalam Matriks1 :");
var matriks2Baris=prompt("Masukan Jumlah Baris dalam Matriks2 :");
var matriks2Kolom=prompt("Masukan Jumlah Kolom dalam Matriks2 :");


const cekMatriks=(matriks1Baris,matriks1Kolom,matriks2Baris,matriks2Kolom)=>{
    if((matriks1Baris==matriks2Baris) && (matriks1Kolom==matriks2Kolom)){
      return true;
    }
    else
    {
      return false
    }
  }

const hitungMatriks=(matriks1Baris,matriks1Kolom,matriks2Baris,matriks2Kolom)=>{
  let cek=cekMatriks(matriks1Baris,matriks1Kolom,matriks2Baris,matriks2Kolom);
  var barisMatrix=matriks1Baris;
  var kolomMatrix=matriks1Kolom;
  
  var totMatriks=[];
  let tampung=0;
    
  if(cek){
    var matriks1=new Array(barisMatrix);
    var matriks2=[];
    for(let i=0;i<barisMatrix;i++){
      for(let j=0;i<kolomMatrix;j++){
       var t=prompt("matriks 1 : baris "+i++ +"kolom "+j++); 
       matriks1[i][j]=t;
       matriks2[i][j]=prompt("matriks 1 : baris "+i+"kolom "+j); 
      }
    }  
        
    }else{
      alert("Bukan Matriks Persegi");
    }
    
}

hitungMatriks(matriks1Baris,matriks1Kolom,matriks2Baris,matriks2Kolom);
