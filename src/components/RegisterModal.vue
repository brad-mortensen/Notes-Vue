<template>
  <div class="register-container">
    <div class="register-modal">
      <h3>Register</h3>
      <input v-model="username" name="username" placeholder="username..." />
      <input
        v-model="password"
        name="password"
        type="password"
        placeholder="Enter password..."
      />
      <button @click="register" class="register">register</button>
      <button @click="toggleRegistering">Cancel</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  props: {
    toggleRegistering: Function
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    register: () => {
      axios
        .post(`https://lambda-notes-build.herokuapp.com/api/register/`, {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res.status);
          this.username = "";
          this.password = "";
          this.toggleRegistering();
          console.log("deregistering");
          this.$router.push("/");
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
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
    height: 200px;
    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: white;
    h3 {
      width: 100%;
      height: 10px;
      text-align: center;
      padding: 0;
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
      border: 1px solid black;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
    }
    .register {
      background-color: cadetblue;
    }
  }
}
</style>
