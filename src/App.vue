<template>
  <div class="app" id="app">
    <NavBar/>
    <div class="components">
      <div class="buttons">
        <a @click="toggleLogin" v-if="loggedIn===false">Login</a>
        <a @click="toggleRegistering" v-if="loggedIn===false">Register</a>
        <a @click="handleLogout" v-if="loggedIn">Logout</a>
      </div>
      <div v-if="loggedIn===false" class="outer-container"></div>
      <login-modal :toggleLogin="toggleLogin" v-if="loggingIn"></login-modal>
      <registerModal :toggleRegistering="toggleRegistering" v-if="registering"></registerModal>
      <router-view v-if="loggedIn"/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import NotesList from "./components/NotesList";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
export default {
  name: "App",
  data() {
    return {
      username: "",
      password: "",
      loggedIn: false,
      loggingIn: false,
      registering: false
    };
  },
  components: {
    NotesList,
    NavBar,
    LoginModal,
    RegisterModal
  },
  beforeCreate() {
    localStorage.removeItem("USER_DATA");
  },
  created() {
    const token = localStorage.getItem("USER_DATA");
    token ? (this.loggedIn = true) : (this.loggedIn = false);
  },
  beforeUpdate() {
    const token = localStorage.getItem("USER_DATA");
    token ? (this.loggedIn = true) : (this.loggedIn = false);
  },
  methods: {
    toggleRegistering: function() {
      this.registering = !this.registering;
    },
    toggleLogin: function() {
      this.loggingIn = !this.loggingIn;
    },
    handleLogout: function() {
      localStorage.removeItem("USER_DATA");
      this.loggedIn = false;
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: cadetblue;
  .components {
    width: 99%;
    height: auto;
    .buttons {
      padding: 10px;
      padding-right: 25px;
      display: flex;
      justify-content: flex-end;
      background-color: darkslategray;
      border-left: 1px solid black;
      a {
        height: auto;
        padding: 3px;
        margin-left: 10px;
        color: black;
        font-family: "Courier New", Courier, monospace;
        font-size: 1rem;
        font-weight: bold;
        width: 12%;
        text-decoration: none;
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
    }
    .outer-container {
      height: 900px;
      background-color: indianred;
      border-left: 1px solid black;
    }
  }
}
</style>
