
<template>
  <div class="holder">
    <div v-for="(note, index) in notes" :key="index" class="note">
      <h2>{{note.title}}</h2>
      <p>{{note.textBody}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "note",
  data() {
    return {
      notes: []
    };
  },
  beforeCreate() {
    axios
      .get(`https://lambda-notes-build.herokuapp.com/api/notes/`)
      .then(res => {
        this.notes = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="less" scoped>
.holder {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
.note {
  color: black;
  border: 1px solid grey;
  width: 30%;
  height: 200px;
  margin-top: 20px;
  background-color: white;
  overflow: hidden;
  padding: 10px 0;
  text-decoration: none;
  box-sizing: border-box;
  word-wrap: break-word;
  margin-left: 15px;
  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 1px solid grey;
    width: 90%;
    margin-left: 5%;
    padding-bottom: 5px;
  }
  p {
    font-size: 1rem;
    width: 90%;
    margin-left: 5%;
  }
}
</style>
