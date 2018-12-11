<template>
  <div id="app">
    <navBar></navBar>
    <notesList></notesList>
  </div>
</template>

<script>
import NavBar from "./components/Navbar";
import NotesList from "./components/NotesList";
export default {
  name: "App",
  components: {
    NotesList,
    NavBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  border: 1px solid grey;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: lightgrey;
}
</style>
