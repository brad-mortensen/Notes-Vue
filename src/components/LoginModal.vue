<template>
  <div class="login-container">
    <div class="login-modal">
      <h3>Login</h3>
      <input v-model="username" name="username" placeholder="username...">
      <input v-model="password" name="password" type="password" placeholder="password...">
      <button @click="login" class="login">Login</button>
      <button @click="toggleLogin">Cancel</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  props: {
    toggleLogin: Function
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      axios
        .post(`https://lambda-notes-build.herokuapp.com/api/login/`, {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log("Success!", res.status);
          localStorage.setItem("USER_DATA", res.data);
          this.username = "";
          this.password = "";
          this.toggleLogin();
          this.$router.push("/notes");
        })
        .catch(err => {
          console.log("Unable to login", err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(4, 0, 0, 0.7);
  .login-modal {
    width: 60%;
    height: 200px;
    border: 1px solid grey;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: white;
    h3 {
      width: 100%;
      height: 10px;
      text-align: center;
      padding: 0;
      margin-bottom: 0;
    }
    input {
      width: 40%;
      height: 25px;
    }
    button {
      font-family: "Courier New", Courier, monospace;
      background-color: red;
      width: 25%;
      height: 30px;
      margin-top: 0;
      border: 1px solid grey;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
    }
    .login {
      background-color: #00ced1;
    }
  }
}
</style>
