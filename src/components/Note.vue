
<template>
  <router-link exact :to="{name:'singleNote', params:{id: note.id}}" class="note">
    <h2>{{note.title}}</h2>
    <p>{{note.textBody}}</p>
  </router-link>
</template>

<script>
import axios from "axios";
export default {
  name: "note",
  props: ["note"]
};
</script>

<style lang="less" scoped>
.note {
  color: black;
  border: 1px solid grey;
  width: 30%;
  height: 200px;
  margin-top: 20px;
  background-color: #f7f581;
  overflow: hidden;
  padding: 10px 0;
  text-decoration: none;
  box-sizing: border-box;
  word-wrap: break-word;
  margin-left: 15px;
  h2 {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 1px solid black;
    width: 90%;
    margin-left: 5%;
    padding-bottom: 5px;
  }
  p {
    text-decoration: none;
    color: black;
    font-size: 1rem;
    width: 90%;
    margin-left: 5%;
  }
}
</style>
