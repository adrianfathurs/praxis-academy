<template>
  <div id="loopingStatement">
    <h3><b>Not Using Looping</b></h3>
    <ul>
      <li>Nama Mobil Mitsubisi</li>
      <li>Nama Mobil Toyota</li>
    </ul>
    <h3><b>Using Looping</b></h3>
    <ul v-for="item in items" :key="item.id">
      <li>Nama dia adalah {{item.nama}}, ia berumur {{item.umur}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"Looping",
  data:()=>{
    return{
      kondisi:false,
      items:[
        {nama:"Adrian fathur",umur:"12"},
        {nama:"Sevia",umur:"13"},
        {nama:"Setyawan",umur:"29"},
      ],
    }
  },
  methods: {
    
  },
  component:{

  },
  computed:{

  }
}
</script>