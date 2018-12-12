<template>
  <div class='delete-container'>
    <div className='delete-modal'>
      <p>Are you sure you want to delete this note?</p>
      <button @click='deleter' class='delete'>Delete</button>
      <button @click='onClick' >Cancel</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'delete',
    props: {
    onClick: Function,
    deleter: Function
    }
  }
</script>
<style lang="less" scoped>

.delete-container {
  width: 75%;
  background-color: whitesmoke;
  border-left: 1px solid grey;
  height: 800px;
  display: flex;
  justify-content: center;
  padding-top: 200px;
  box-sizing: border-box;
  .delete-modal {
    width: 60%;
    height: 150px;
    border: 1px solid grey;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: white;
  }
  .delete-modal p {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
  }
  .delete-modal button {
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
  }.delete-modal .delete {
    background-color: red;
  }
}
</style>
