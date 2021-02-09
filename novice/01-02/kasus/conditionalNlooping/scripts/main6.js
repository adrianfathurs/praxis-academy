var student =[
  {nama:"David",mark:80},
  {nama:"Tono",mark:77},
  {nama:"Susi",mark:88},
  {nama:"Tini",mark:95},
  {nama:"Thomas",mark:68},
];

var sum=0,average;
for(let i=0;i<student.length;i++){
  //penjumlahan
  sum+=student[i].mark;
  //rata2 dan pembagian
  average=sum/student.length;
}

console.log(average);


if(average<60){
  console.log("F");
}
else if(average<70){
  console.log("D");
}
else if(average<80){
  console.log("C");
}
else if(average<90){
  console.log("B");
}
else {
  console.log("A");
}