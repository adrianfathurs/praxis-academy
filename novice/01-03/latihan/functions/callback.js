// function callback penjumlahan
const saldo=(saldo1,saldo2,callback)=>{
  return callback(saldo1,saldo2);
}
Penjumlahan=saldo(20000,10000,(a,b)=>{
    return "Penjumalahan : "+`${a+b}`;
})
console.log(Penjumlahan);

//function callback pengurangan
const minus=(a,b)=>{
  return "Pengurangan : " +`${a-b}`;
}
Pengurangan=saldo(50000,10000,minus);
console.log(Pengurangan);

/* -------------------------------------------------------------------------------------------- */
//function callback  gaji
const gaji=(gaji1,gaji2,total)=>{
  return total(gaji1,gaji2);
}

const sumSalary=gaji(44444000,200000,(a,b)=>{
    return "Total Gaji : "+`${a+b}`;
});

console.log(sumSalary);