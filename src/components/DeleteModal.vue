<template>
  <div class="delete-container">
    <div class="delete-modal">
      <p>Are you sure you want to delete this note?</p>
      <button @click="deleter" class="delete">Delete</button>
      <button @click="onClick">Cancel</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Delete",
  props: {
    onClick: Function,
    deleter: Function
  }
};
</script>
<style lang="less" scoped>
.delete-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(4, 0, 0, 0.7);
  .delete-modal {
    width: 30%;
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
    font-family: "Courier New", Courier, monospace;
    background-color: #00ced1;
    width: 30%;
    height: 45px;
    margin-top: 0;
    border: 1px solid grey;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
  }
  .delete-modal .delete {
    background-color: red;
  }
}
</style>
