<template>
  <form class="form">
    <h3 class="add-header">Edit Note:</h3>
    <input v-model="note.title" class="title" placeholder="Note Title" />
    <textarea v-model="note.textBody" class="body" placeholder="Note Content" />
    <button v-on:click="handleSubmit" class="save">Save</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "EditForm",
  data() {
    return {
      note: [{ id: null, title: "", textBody: "" }]
    };
  },
  created() {
    this.note.id = this.$route.params.id;
    this.note.title = this.$route.params.title;
    this.note.textBody = this.$route.params.textBody;
  },
  methods: {
    handleSubmit: e => {
      const id = this.$route.params.id;
      e.preventDefault();
      axios
        .put(`https://lambda-notes-build.herokuapp.com/api/notes/${id}`, {
          title: this.note.title,
          textBody: this.note.textBody
        })
        .then(res => {
          console.log(res.status);
          this.note.title = "";
          this.note.textBody = "";
          this.$router.push("/notes");
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.form {
  box-sizing: border-box;
  background-color: indianred;
  border-left: 1px solid black;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  padding: 60px 4% 200px 2%;
  h3 {
    width: 100%;
    height: 30px;
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .save {
    font-family: "Courier New", Courier, monospace;
    background-color: goldenrod;
    width: 30%;
    height: 45px;
    margin-top: 0;
    margin-right: 40%;
    border: 1px solid black;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    &:hover {
      background-color: white;
      color: cadetblue;
    }
  }
  .title {
    height: 45px;
    width: 55%;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 3px;
    box-shadow: 0;
    font-size: 1.2rem;
  }
  .body {
    margin-bottom: 20px;
    width: 96%;
    height: 400px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid black;
    font-size: 1.2rem;
  }
}
</style>
