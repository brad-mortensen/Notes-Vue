<template>
  <form v-on:submit="handleSubmit" class="form">
    <h3 class="add-header">Create New Note:</h3>
    <input v-model="note.title" class="title" placeholder="\Title" />
    <textarea v-model="note.textBody" class="body" placeholder="Content" />
    <button v-on:click="handleSubmit" class="save">Save</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "AddForm",
  data() {
    return {
      note: {
        title: "",
        textBody: ""
      }
    };
  },
  methods: {
    handleSubmit: e => {
      e.preventDefault();
      const data = {
        title: this.note.title,
        textBody: this.note.textBody
      };
      axios
        .post(`https://lambda-notes-build.herokuapp.com/api/notes/`, data)
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
  background-color: whitesmoke;
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
    background-color: #00ced1;
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
      color: #00ced1;
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
  }
  .body {
    margin-bottom: 20px;
    width: 96%;
    height: 400px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid black;
  }
}
</style>
