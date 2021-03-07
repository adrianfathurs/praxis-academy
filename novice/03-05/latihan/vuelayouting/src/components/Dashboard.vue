<template>
  
<v-container>
  <v-row>
    <v-col  v-for="(items,index) of getWisata" :key="index">
      <v-card 
        class="mx-auto"
        max-width="344"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>

        <v-card-title>
          {{items.nameVacation}}
        </v-card-title>

        <v-card-subtitle>
          {{items.tempatVacation}}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange lighten-2"
            text
          >
            Explore
          </v-btn>

          <v-spacer></v-spacer>
          <v-btn depressed color="error" @click="btnHapus(index)" :key="index">Error</v-btn>
          <v-btn
            icon
            @click="show = !show"
            
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
             {{items.ketWisata}}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</v-container>
  
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      getWisata:(state)=>state.wisata
    })
    
},
  data: () => {
    return{

      show: false,
    }
},
  methods: {
    btnHapus(index){
      this.$store.dispatch("deleteWisata",{
        deleteIndex:index
      })
    }
  },
  
}
</script>