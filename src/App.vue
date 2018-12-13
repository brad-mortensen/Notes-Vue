<template>
  <div class="app" id="app">
    <navBar></navBar>
    <div class="components">
      <div class="buttons">
        <a @click="toggleLogging" v-if="loggedIn===false">Login</a>
        <a @click="toggleRegistering" v-if="loggedIn===false">Register</a>
        <a @click="handleLogout" v-if="loggedIn">Logout</a>
      </div>
      <login-modal :toggleLogging="toggleLogging" v-if="loggingIn"></login-modal>
      <registerModal :toggleRegistering="toggleRegistering" v-if="registering"></registerModal>
      <router-view v-if="loggedIn"/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/Navbar";
import NotesList from "./components/NotesList";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
export default {
  name: "App",
  data() {
    return {
      username: '',
      password: '',
      loggedIn: false,
      loggingIn: false,
      registering: false
    }
  },
  components: {
    NotesList,
    NavBar,
    LoginModal,
    RegisterModal
  },
  created() {
    const token = localStorage.getItem('BANK CODE');
    if(token){
      this.loggedIn = true;
    }else {
      this.loggedIn = false;
    }
  },
  updated() {
    const token = localStorage.getItem('BANK CODE');
    if(token){
      this.loggedIn = true;
    }else {
      this.loggedIn = false;
    }
  },
  methods: {
    toggleRegistering: function() {
      this.registering = !this.registering
    },
    toggleLogging: function() {
      this.loggingIn = !this.loggingIn
    },
    handleLogout: function() {
      localStorage.removeItem('BANK CODE');
      this.loggedIn = false;
      this.$router.push('/')
    }
  }
};
</script>

<style lang="less">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  border: 1px solid grey;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: lightgrey;   
  .components {
    width: 100%;
    height:auto;
    .buttons {
      padding: 10px;
      display: flex;
      justify-content: flex-end;
      background-color: whitesmoke;
      border-left: 1px solid grey;
      a{        
        height: auto;
        padding: 3px;
        margin-left: 10px;
        color: black;
        font-family: 'Courier New', Courier, monospace;
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
  }
}
</style>
