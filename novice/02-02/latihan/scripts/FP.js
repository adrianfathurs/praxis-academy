//functional Programming terdapat funsi map, filter,reduce


/////////////////////////////////////////////////
  //CONTOH KODINGAN FUNGI FILTER
////////////////////////////////////////////////
let meetups = [
  {name:'JS',isActive:true,members:450}, 
  {name:'Angular',isActive:true,members:900},
  {name:'Node',isActive:false,members:900}
];
//Cara 1
  let activeMeetupsFP = [];
    activeMeetupsFP = (meetups.filter((m)=>{
      return m.isActive;
    }));
    console.log("Percobaan 1 :")
  
    for (let k = 0; k < activeMeetupsFP.length; k++) {
      var tampil= activeMeetupsFP[k];
      console.log(`tampil nama : ${tampil.name}, tampil status : ${tampil.isActive}, tampil members : ${tampil.members}`);
    }
//cara2
  let framework = [
    {name:'JS',isActive:true,members:450}, 
    {name:'Angular',isActive:true,members:900},
    {name:'Node',isActive:false,members:900}
  ];

  var framedificult=framework.filter((isActive)=>{
    return isActive.isActive==true;
  });

    console.log("Percobaan 2 :")
    for (let k = 0; k < framedificult.length; k++) {
      var tampil= framedificult[k];
      console.log(`tampil nama : ${tampil.name}, tampil status : ${tampil.isActive}, tampil members : ${tampil.members}`);
    }

//cara3
  framework  = [
    {name:'JS',isActive:true,members:450}, 
    {name:'Angular',isActive:true,members:900},
    {name:'Node',isActive:false,members:900}
  ];

  var framedificult=framework.filter((isActive)=>isActive.isActive==true);
  
  console.log("Percobaan 3 :")
      for (let k = 0; k < framedificult.length; k++) {
        var tampil= framedificult[k];
       
        console.log(`tampil nama : ${tampil.name}, tampil status : ${tampil.isActive}, tampil members : ${tampil.members}`);
        
      }

///////////////////////////////////////////////////////////
// fungsi MAP di Javascript
//////////////////////////////////////////////////////////
      /*  map merupakan fungsi dalam javascript yang dikembangkan di tahun 2011 hingga sekarang dan memiliki fungis yaitu merubah semua elemen didalam 
        suatu array menjadi elemen dengan nilai yang baru.
        inti dari fungsi map yaitu mengubah semua element yang ada disuatu array ibarat kata kayak looping
      */

     /* array.map(function(element,index,array){
      ..
     },this.argument);
     

      */
  var bilangan=[1,2,3,4,5];
  var bilanganToString=bilangan.map((element)=>{
      if(element%2==0){
        return element;
      }
      else{
        return false;
      }
    }
  );
  console.log(`Pecoobaan Map :${bilanganToString}`);
  console.log(bilanganToString);
  //ini aku buat map aku kombinasikan map dengan filter
  var tampilkan=bilanganToString.filter((el)=>el!=false)
  console.log(tampilkan);

  var mobil=[
    {type:"lamborgini"},
    {type:"ferarri"},
  ];

  var tipe=mobil.map((type)=>type.type);
 
  console.log(tipe);

//////////////////////////////////////////////////////////
//fungsi reduce
/////////////////////////////////////////////////////////
  //reduce merupakan fungsi yang digunakan untuk mengurangi atau mengakumulassisuatu element didalam array
  /* keterangan parameter yang ada didalam fungsi reduce 
      array.reduce(function(value,element,index,array){

    },initial value);
    1. value(nilai yang diakumulasikan pada tiap callback)
    2. element (nilai dari element).
    3. index (index dari tiap lintasan ,dari kiri kekanan(0 ke N))
    4. array => dapat berupa objek ataupun array;
    5. initialvalue (optional, nilai yang digunakan sebagai nilai awal di callback yang pertama (index0))

  */
var bali = [
	{ regency:'Jembrana', population:114863 },
	{ regency:'Tabanan', population:209308 },
	{ regency:'Badung', population:277536 },
	{ regency:'Gianyar', population:208443 },
	{ regency:'Klungkung', population:79233 },
	{ regency:'Bangli', population:106166 },
	{ regency:'Karangasem', population:193787 },
	{ regency:'Buleleng', population:294418 },
	{ regency:'Denpasar', population:403292 }
];


var sum = bali.reduce(function(val, element) {
	return val + element.population;
},0);

console.log(sum) // 1887046


//////////////////////////////////////////////////
// Fungsi find
/////////////////////////////////////////////////
  /* fungsi ini hampir mirip dengan filter tetapi yang membedakana adalah filter akna mengembalikan nilai dengan bentuk objek dalam array
    sedangkan find akan mengembalikan nilai dalam bentuk objek langsung.
  */
  let frameswork=[
    { name: "Angular",isActive:true, members:1000},
    {name: "Node",isActive:true,members:500},
    {name: "Angular",isActive:false,members:800},
  ];
  //cara 1
  let frame=frameswork.find((el)=>el.isActive==true)
    console.log(`percobaan 2 find = name : ${frame.name} isActive : ${frame.isActive} member : ${frame.members}`);
  //cara 2
  let frames=frameswork.find((el)=>{
    return el.isActive==true;
  })
    console.log(`percobaan 2 find = name : ${frames.name} isActive : ${frames.isActive} member : ${frames.members}`);


/////////////////////////////////////////////////
// fungsi some dan every
////////////////////////////////////////////////

let jsFramework=[
    { name: "Angular",isActive:false, members:1000},
    {name: "Node",isActive:true,members:500},
    {name: "Angular",isActive:true,members:800},
  ];

  let every=jsFramework.every((el)=>{
    return el.name;
  });
  console.log(every);
  
  let some=jsFramework.some((el)=>{
    return el.name;
  });
  console.log(some);


/* KAPAN TIDAK HARUS MEMAKAI FUNGSI MAP,REDUCE,FILTER  */
//1. Apabila data looping kurang dari 1000 elemen karena akan mempengaruhi performa.
//2. perulangan yang memiliki tingkat kompleksitas yang tinggi.

