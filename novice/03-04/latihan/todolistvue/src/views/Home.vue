<template>
  <div class="home">
    <button class="float-right" @click="btnTampil()">Tampil Form Tambah</button>
    <div class="form-content" v-if="tampil">
      <AddToList />
    </div>
    <center>
      <div id="box2" v-for="(item, index) of dataUser" :key="index">
        <div class="left-box">
          <p>
            <b>Nama</b> : <span>{{ item.nama }}</span>
          </p>
          <p>
            <b>Umur</b> :<span>{{ item.age }}</span>
          </p>
          <button @click="btnHapus(index)">Hapus Kegiatan</button>
          <button @click="btnPopUp(index)">PopUp Edit Kegiatan</button>
        </div>

        <div class="right-box" v-if="checkEdit">
          <FormEdit :indeksEdit="indexEdit" @closePopUp="close" />
        </div>
      </div>
    </center>
  </div>
</template>

<script>
// @ is an alias to /src
import FormEdit from "@/components/FormEdit.vue";
import AddToList from "@/components/AddToList.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    AddToList,
    FormEdit,
  },
  data: () => {
    return {
      tampil: false,
      checkEdit: false,
      indexEdit:null,
    };
  },
  computed: {
    ...mapState({
      dataUser: (state) => state.user,
    }),
  },
  
  methods: {
    btnTampil() {
      if (this.tampil) {
        this.tampil = false;
        return this.tampil;
      } else {
        this.tampil = true;
        return this.tampil;
      }
    },
    btnHapus(index) {
      this.$store.dispatch("deleteData", {
        chooseDelete: index,
      });
    },
    btnPopUp(index) {
      if (this.checkEdit) {
        this.checkEdit = false;
        this.indexEdit=index;
        console.log(this.indexEdit);
        return this.checkEdit;
      } else {
        this.checkEdit = true;
        this.indexEdit=index;
        console.log(this.indexEdit);
        return this.checkEdit;
      }
    },
    close(param){
      this.checkEdit=param;
      return this.checkEdit;
    }
  },
};
</script>
<style>
#home {
  box-sizing: border-box;
  margin: 0px;
  width: 80vw;
}
.float-right {
  float: right;
  margin-right: 30%;
}
.form-content {
  justify-items: center;
  justify-content: center;
}
#box2 {
  display: flex;
  flex-direction: row;
  width: 80vw;
}
.left-box {
  flex-grow: 3;
}
.right-box {
  flex-grow: 3;
}
</style>
