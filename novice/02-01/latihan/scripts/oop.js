class Human{
  
  constructor(nama,alamat,makan){
    this.nama=nama;
    this.alamat=alamat;
    this.makan=makan;
    
  }

  walk(){
    return `${this.nama} sedang berjalan dari ${this.alamat} ${this.age}`;
  }
  makans(){
    return this.walk();
  }
  tampil(){
    return this.makans();
  }
}

let human= new Human("Tono","Jln Kabupaten Melati Sleman","Gudeg");
//cara menambhakan variable didalam suatu class constructor
  Human.prototype.age="19";
//cara menambahkan methods menggunakan prototype ke suatu class 
  Human.prototype.rumah=function(){
    return "Rumah Jauh";
  }
//untuk mengetes apakah fungsi yang telah dibuat menggunakan prototype bisa di akses
  console.log(human.rumah());
//cara memanggil method tampil
  console.log(human.tampil());
//cara memanggil variable yang ada didalam suatu kelas.
  console.log(human.nama)
//delete ini fungsinya bisa digunakan untuk menghapus variable yang ada didalam kelas
  delete human.nama;




/* ------------------------------------------------------------------ */
class ValidationError extends Error {

  constructor(message) {
    super(message);  // call parent class constructor
    this.name = 'ValidationError';
    this.code = '42';
  }

  printCustomerMessage() {
     return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
  }

}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // Now this is ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}

