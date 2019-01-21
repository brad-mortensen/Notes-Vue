<template>
  <div class="single-container">
    <div class="button-container">
      <router-link
        exact
        :to="{name:'edit', params:{id: this.$route.params.id, title: note.title, textBody: note.textBody}}"
      >Edit</router-link>
      <a class="delete-button" @click="toggleDelete" to exact>Delete</a>
    </div>
    <h2>{{note.title}}</h2>
    <p>{{note.textBody}}</p>
    <router-view></router-view>
    <deleteModal v-if="deleting" :onClick="toggleDelete" :deleter="handleDelete"></deleteModal>
  </div>
</template>

<script>
import axios from "axios";
import DeleteModal from "./DeleteModal";
export default {
  name: "SingleNote",
  components: {
    DeleteModal
  },
  data() {
    return {
      note: [],
      deleting: false
    };
  },
  created() {
    const id = this.$route.params.id;
    axios
      .get(`https://lambda-notes-build.herokuapp.com/api/notes/${id}`)
      .then(res => {
        this.note = res.data;
      })
      .catch(err => {
        console.log("Note with that ID not found", err);
      });
  },
  methods: {
    toggleDelete: function() {
      this.deleting = !this.deleting;
    },
    handleDelete: function() {
      const id = this.$route.params.id;
      axios
        .delete(`https://lambda-notes-build.herokuapp.com/api/notes/${id}`)
        .then(res => {
          console.log("Success!", res.status);
          this.$router.push("/notes");
        })
        .catch(err => console.log("Cant delete note with that ID", err));
    }
  }
};
</script>

<style lang="less" scoped>
.single-container {
  box-sizing: border-box;
  background-color: #35EDAC;;
  border-left: 1px solid black;
  width: 100%;
  height: 800px;
  padding: 20px;
  .button-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      margin-right: 20px;
      font-size: 1rem;
      text-decoration: underline;
      font-weight: bold;
      color: black;
      cursor: pointer;
    }
    p {
      margin-right: 20px;
      font-size: 1rem;
      text-decoration: underline;
      font-weight: bold;
      color: black;
      cursor: pointer;
    }
    .single-container h2 {
      font-size: 1.4rem;
      font-weight: bold;
      margin-bottom: 35px;
    }
    .single-container p {
      font-size: 1rem;
    }
  }
}
</style>
