<template>
  <v-dialog v-model="dialog" max-width="500px" persistent>
    <v-card>
      <v-card-title>
        Role Register
      </v-card-title>
      <v-card-text>
        <v-select
          :items="select"
          :value="select"
          label="A Select List"
          item-value="text"
        ></v-select>
      </v-card-text>

      <v-card-actions>
        <div class="float-right">
          <v-btn color="primary" text @click="simpan()">
            Save
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: true,
      select: ["Admin", "Event Organizer", "Perusahaan"],
    };
  },
  mounted() {
    this.dialog = true;
  },
  methods: {
    close() {
      this.dialog = false;
    },
    simpan() {
      /* Masih Kurang ngisi Set Role */
      this.$router.push("/event");
    },
  },
};
</script>
