<template>
  <v-data-table
    :headers="headers"
    :items="AllData"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.name"
                      label="name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.alamat"
                      label="alamat"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.umur"
                      label="umur"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="
                  save(editedItem.name, editedItem.alamat, editedItem.umur)
                "
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogUpdate" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">Update Form</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.name"
                      label="name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.alamat"
                      label="alamat"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.umur"
                      label="umur"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeUpdate">
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="
                  btnUpdate(
                    editedItem.id,
                    editedItem.name,
                    editedItem.alamat,
                    editedItem.umur
                  )
                "
              >
                Update
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    dialog: false,
    dialogUpdate: false,
    dialogDelete: false,
    deletedItems: 0,
    headers: [
      {
        text: "id",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Name", value: "name" },
      { text: "Alamat", value: "alamat" },
      { text: "Age", value: "umur" },

      { text: "Actions", value: "actions", sortable: false },
    ],

    editedIndex: -1,
    editedItem: {
      name: "",

      alamat: "",
      umur: 0,
    },
    defaultItem: {
      name: "",

      alamat: "",
      umur: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    ...mapGetters({
      AllData: "toDoList/getterAllData",
    }),
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    dialogUpdate(val) {
      val || this.closeUpdate();
    },
  },
  //life cycle mounted and updated

  mounted() {
    this.getAllData();
  },

  methods: {
    getAllData() {
      this.$store.dispatch("toDoList/getAllData");
      return this.AllData;
    },

    editItem(item) {
      this.editedIndex = this.AllData.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogUpdate = true;
    },

    deleteItem(item) {
      /* this.editedIndex = this.allData.indexOf(item);
      this.editedItem = Object.assign({}, item);*/

      this.dialogDelete = true;
      this.deletedItems = item.id;
    },

    deleteItemConfirm() {
      var id = this.deletedItems;
      this.$store.dispatch("toDoList/deletedData", id);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.getAllData();
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeUpdate() {
      this.dialogUpdate = false;
      this.$nextTick(() => {
        this.getAllData();
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.getAllData();
      });
    },
    btnUpdate(itemId, itemName, itemAlamat, itemUmur) {
      var dataUpdate = {
        name: itemName,
        alamat: itemAlamat,
        umur: itemUmur,
      };
      var idDataUpdate = itemId;
      this.$store.dispatch("toDoList/updatedData", {
        id: idDataUpdate,
        data: dataUpdate,
      });
      this.closeUpdate();
    },
    save(name, alamat, umur) {
      var data;

      data = {
        name: name,
        alamat: alamat,
        umur: umur,
      };
      console.log("false");
      console.log(data);
      this.$store.dispatch("toDoList/addData", data);

      this.close();
    },
  },
};
</script>
