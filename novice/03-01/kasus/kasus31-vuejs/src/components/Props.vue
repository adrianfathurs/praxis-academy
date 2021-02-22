<template>
<div  >
  <ul v-for="al in address" :key="al.index">
  <li>{{al.nama}}</li>
  <p>{{al.alamat}}</p>
  </ul>
</div>
</template>
<script>
export default {
  name:"address",
  props:["address"],
  data() {
    return {
      alamat:"My address from child",
    }
  },
}
</script>