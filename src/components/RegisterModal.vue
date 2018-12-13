<template>
  <div class='register-container'>
    <div class='register-modal'>
      <h3>Register</h3>
      <label>Username: </label>
      <input v-model="username" name="username"/>
      <label>Password: </label>
      <input v-model="password" name="password" type="password"/>
      <button @click="register" class='register'>register</button>
      <button @click="toggleRegistering">Cancel</button>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'Register',
    props: {
    toggleRegistering: Function
    },
    data() {
      props: 
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      register: function() {
        axios.post(`https://lambda-notes-build.herokuapp.com/api/register/`, {
          username: this.username, password: this.password
        }).then(res => {
          console.log('Success!', res.status);
          this.username = ''
          this.password = '' 
          this.$router.push('/')
        }).catch(err => {
          console.log('ERROR', err)
        })
      }
    }
  }
</script>
<style lang="less" scoped>

.register-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(4, 0, 0, 0.7);
  .register-modal {
    width: 60%;
    height: 150px;
    border: 1px solid grey;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: white;
  }
  .register-modal p {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
  }
  .register-modal button {
    font-family: 'Courier New', Courier, monospace;
    background-color: #00ced1;
    width: 30%;
    height: 45px;
    margin-top: 0;
    border: 1px solid grey;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
  }.register-modal .register {
    background-color: red;
  }
}
</style>
