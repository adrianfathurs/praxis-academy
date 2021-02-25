<template>
  <div> 

  <v-card v-for="items in item" :key="items"
    class="mx-auto mb-4"
    max-width="344"
    outlined
    
  >
   
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          {{items.wisata}}
        </div>
        <v-list-item-title class="headline mb-1">
          {{items.wilayah}}
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
    
  </v-card>
  
  </div>
</template>
<script>
  export default {
    data:()=>{
      return{
        item:[
         {wisata:"Gunung Kidul",wilayah:"Yogyakarta"},
         {wisata:"Yogyakarta",wilayah:"DIY"},
      ],
      }
    }
  }
</script>