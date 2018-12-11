<template>
  <div class='single-container'>
    <div class='button-container'> 
      <router-link exact :to="{name:'edit', params:{id: note._id, title: note.title, textBody: note.textBody}}" >Edit</router-link>
      <router-link to="" exact>Delete</router-link>
    </div> 
    <h2>{{note.title}}</h2>
    <p>{{note.textBody}}</p>
    <router-view></router-view>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  name: "SingleNote",
  data() {
    return {
      note:[]
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
        console.log(err);
      });
  }
};
</script>

<style lang="less" scoped>
.single-container {
  background-color: whitesmoke;
  border-left:1px solid grey;
  width: 75%;
  height: 800px;
  padding: 20px;
}

.single-container .button-container {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.single-container .button-container a {
  margin-right: 20px;
  font-size: 1rem;
  text-decoration: underline;
  font-weight: bold;
  color: black;
}
.single-container .button-container p {
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

</style>
