// handle module fortune Teller and represent in tag html
  const fortuneTeller=()=>{
      var namaPartner = document.getElementById("namaPartner").value;
      var sumOfChildren = document.getElementById("sumOfChildren").value;
      var jobTittle = document.getElementById("jobTittle").value;
      var location = document.getElementById("location").value;

      var paragraf=document.createElement('p');
      var text=document.createTextNode(`You will be a ${jobTittle} in ${location}, and married to ${namaPartner} with ${sumOfChildren} kids `);
      var fhasil=document.getElementById('hasil');
      paragraf.appendChild(text);
      fhasil.appendChild(paragraf);
  };

//handlde module puppyAge and represent in tag html
  const puppyAge=()=>{
    var puppyAge=document.getElementById("puppyAge").value;
    var hitung;
    if(puppyAge<=0){
      //alert Your puppy under Age on dog's year
      var fhitungPuppy=document.getElementById('hitungUmur');
      fhitungPuppy.setAttribute("class","alert alert-danger");
      var text = document.createTextNode(`Your Doggie is  years old in dog years!`);
      fhitungPuppy.appendChild(text);
    }else{
      hitung=puppyAge*7;
      var fhitungPuppy=document.getElementById('hitungUmur');
      fhitungPuppy.setAttribute("class","alert alert-success");
      var text = document.createTextNode(`Your Doggie is ${hitung} years old in dog years!`);
      fhitungPuppy.appendChild(text);
    }
  }

//handle module supply adn represent in tag html
  const supplyFunc=()=>{
    var maxAge=100;
    var age= document.getElementById('age').value;
    var numPer=document.getElementById('numPer').value;
    if(age>100){
      var totalNeeded=(numPer*365)*Math.abs((maxAge-age));
    }else{
      var totalNeeded=(numPer*365)*(maxAge-age);
    }
    var text=document.createTextNode(`You will need ${totalNeeded} to last you until the ripe old age of ${age}`);
    var tampilNum=document.getElementById('tampilNum');
    tampilNum.appendChild(text);
  }

//cara menggunakan Eventlistener
  //event listener eksekusi fortune Teler
  document.getElementById('btnRamal').addEventListener("click",fortuneTeller);
  
  //event listener eksekusi puppy'age
  document.getElementById('btnHitungUmur').addEventListener("click",puppyAge);

  //event listener eksekusi supply 
  document.getElementById('btnSupply').addEventListener("click",supplyFunc);
