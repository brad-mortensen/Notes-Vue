<template>
  <div class='single-container'>
    <div class='button-container'> 
      <router-link to="">Edit</router-link>
      <p>Delete</p>
    </div> 
    <h2>Header</h2>
    <p>Body</p>
  </div> 
</template>

<script>
import axios from 'axios'
export default {
  name: "SingleNote",
  components:{
  },
  data() {
    return {
      note: [
        {}
      ]
    };
  },
  created() {
  }
};
</script>

<style lang="less" scoped>

</style>
