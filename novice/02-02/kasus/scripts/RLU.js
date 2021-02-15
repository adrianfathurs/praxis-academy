// Ramda, lodash and underscore merupakan suatu kesatuan library yang ada didalam javascript,ketiganya merupakan library tentang functional prograaming
  /* Setelah keluar model programming es6 pada javascript membuat libaries underscore menjadi memudar untuk kalangan komunitasnya
    untuk ramda masih bertahan karena mereka memproduksi dan mencoba untuk menghasilkan FP yang mudah untuk digunakan
  */

/* 
  contoh merger objek sebelum adanya ES6 di javascript dan sekarang apabila di run harus diimport dulu dan mebuat ribet
*/

    import { merge } from 'lodash';
    const animal1={name:'bob'};
    const animal2={name2:'ton'};
    const merged=merge(animal1,animal2); 
    
    console.log(merged);
/* 
  contoh saja syntax dalam menggabungkan 2 objek seperti berikut setelah adanya ES6 di javascript
*/
 /*  const firstName={firstName:"Adrian"};
  const lastName={lastName:"Setyawan"};
  const merged={...firstName,...lastName};
  console.log(merged); */
