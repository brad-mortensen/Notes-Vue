<template>
  <form v-on:submit="handleSubmit" class='form'>
    <h3 class='add-header'>Create New Note:</h3>
    <input 
      v-model='note.title'
      class='title'
      placeholder='Note Title'/>
    <textarea 
      v-model='note.textBody'
      class='body'
      placeholder='Note Content'/>
    <button v-on:click='handleSubmit' class='save'>Save</button>
  </form> 
</template>

<script>
import axios from 'axios'
  export default {
    name: 'AddForm',
    data() {
      return {
        note: {
          title: '',
          textBody: ''
        }
      }
    },
    methods: {
      handleSubmit: function(e) {
        e.preventDefault();        
        axios.post(`https://lambda-notes-build.herokuapp.com/api/notes/`, {
          title: this.note.title, textBody: this.note.textBody
        }).then(res => {
          console.log('Success!', res.status);
          this.note.title = ''
          this.note.textBody = '' 
          this.$router.push('/notes')
        }).catch(err => {
          console.log('ERROR', err)
        })
      },
    }
  }
</script>

<style lang="less" scoped>
.form {
  background-color: whitesmoke;
  border-left: 1px solid grey;
  width: 75%;
  height: auto;
  display:flex;
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
    font-family: 'Courier New', Courier, monospace;
    background-color: #00ced1;
    width: 30%;
    height: 45px;
    margin-top: 0;
    margin-right: 40%;
    border: 1px solid grey;
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
    border: 1px solid grey;
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
    border: 1px solid grey;
  }
}
</style>
