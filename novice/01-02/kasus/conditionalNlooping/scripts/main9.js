
for(let i=1;i<10;i++){
  for(let j=0;j<10;j++){
    for(let k=0;k<10;k++){
       var pangkat=Math.pow(i,3)+Math.pow(j,3)+Math.pow(k,3);
       
       var tambah=(i*100)+(j*10)+k;
       if (pangkat == tambah){
        console.log(pangkat+"Amstrong Number");
        }
    }
  }
}

