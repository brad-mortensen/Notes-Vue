<template>
  <div class="nav-bar">
    <h1>Vue Notes</h1>
    <router-link :to="{ name: 'notes'}" class="nav-links">View Notes</router-link>
    <router-link :to="{ name: 'add'}" class="nav-links">+ New Note</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.nav-bar {
  box-sizing: border-box;
  width: 25%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  padding: 0px 1%;
  .nav-links {
    background-color: darkgoldenrod;
    width: 30%;
    height: 45px;
    margin-right: 40%;
    margin-bottom: 20px;
    border: 1px solid grey;
    color: white;
    font-family: "Courier New", Courier, monospace;
    font-size: 1.2rem;
    font-weight: bold;
    width: 98%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    &:hover {
      background-color: white;
      color: #00ced1;
    }
  }
  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
}
</style>