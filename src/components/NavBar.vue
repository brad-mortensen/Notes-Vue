<template>
  <div class="nav-bar">
    <h1>Lambda Notes</h1>
    <a class='nav-links' :to="{ path: 'notes' }">View Notes</a>
    <a class='nav-links' :to="{ path: 'addnote' }">+ New Note</a>
  </div>
</template>

<script>
  export default {
    name: 'navBar',
    data() {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  .nav-bar {
  box-sizing: border-box;
  width: 25%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  padding: 0px 1%;
  a {
    background-color: #00ced1;
    width: 30%;
    height: 45px;
    margin-right: 40%;
    margin-bottom: 20px;
    border: 1px solid grey;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2rem;
    font-weight: bold;
    width: 98%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    :hover {
      background-color: white;
      color: #00ced1;
    }
  }
  h1{
    font-size: 2.4rem;
    font-weight: bold;
    width: 60%;
  }
}

</style>

