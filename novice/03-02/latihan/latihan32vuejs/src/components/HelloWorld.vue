<template>
  <div class="hello">
    <p>nama Anda : {{user}}</p>
    <h2>Coba Lempar data Object  menggunakan props </h2>
    <ul v-for="i in items " :key="i">
      <li>nama: {{i.nama}}, Jenis:{{i.jenis}}</li>
    </ul>
    <h2>Cara mengubah Nilai Sebuah Variable Yang Ada di Component Child ke Component Parent</h2>
    <input type="text" v-model="nameChild">
    <button @click="changeUser()">Kirim Data</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    user: String,
    items: Object,
  },
  data:()=>{
    return{
      nameChild:"",
    }
  },
  methods:{
    changeUser(){
      this.$emit("changeUserN", this.nameChild);
    }
  }
}
</script>

