<template>
  <div class="notes-container">
    <h2 class='your-notes'>Your Notes:</h2>
    <button class='sort-button'>Sort A-Z</button>
    <note></note>
  </div>
</template>

<script>
import Note from "./Note";
export default {
  name: "NotesList",
  components:{
    Note
  },
  data() {
    return {
      title: 'Notes List',
      
    };
  }
};
</script>

<style lang="less" scoped>
  .notes-container {
  border-left: 1px solid grey;
  display: flex;
  flex-flow: row wrap;
  width: 75%;
  /* justify-content: space-evenly; */
  background-color: whitesmoke;
  padding-top: 60px;
  padding-bottom: 20px;
  box-sizing: border-box;
  .your-notes {
    width: 30%;
    padding-left: 3%;
    margin-bottom: 0;
    font-weight: bold;
    font-size: 1.4rem;
  }
  .sort-button {
    font-family: 'Courier New', Courier, monospace;
    background-color: #00ced1;
    width: 15%;
    height: 30px;
    margin-top: 0;
    margin-right: 30%;
    border: 1px solid grey;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    :hover {
      background-color: white;
      color: #00ced1;
    }
  }
} 
</style>
