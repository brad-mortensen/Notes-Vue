<template>
  <div class="notes-container">
    <h2 class="your-notes">Notes:</h2>
    <button v-if="sortedAZ === false" @click="sortNotesAZ" class="sort-button">
      Sort AtoZ
    </button>
    <button v-else @click="sortNotesZA" class="sort-button">Sort ZtoA</button>
    <div class="pages">
      <p
        v-for="num in Math.ceil(this.notes.length / this.notesPerPage)"
        v-on:click="changePage(num)"
        v-bind:key="num"
      >
        {{ num }}
      </p>
    </div>
    <note v-for="note in newNotes" :key="note.id" :note="note"></note>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import Note from "./Note";
export default {
  name: "NotesList",
  components: {
    Note
  },
  data() {
    return {
      notes: [],
      sortedAZ: false,
      sortedZA: false,
      currentPage: 1,
      notesPerPage: 9
    };
  },
  computed: {
    newNotes: () => {
      return this.notes.slice(
        this.currentPage * this.notesPerPage - this.notesPerPage,
        this.currentPage * this.notesPerPage
      );
    }
  },
  created() {
    axios
      .get(`https://lambda-notes-build.herokuapp.com/api/notes/`)
      .then(res => {
        this.notes = res.data;
      })
      .catch(err => {
        console.error(err);
      });
  },
  methods: {
    sortNotesAZ: () => {
      this.sortedAZ = true;
      this.sortedZA = false;
      this.notes = this.notes.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
    },
    sortNotesZA: () => {
      this.sortedAZ = false;
      this.sortedZA = true;
      this.notes = this.notes.sort((a, b) =>
        a.title < b.title ? 1 : b.title < a.title ? -1 : 0
      );
    },
    changePage: function(pg) {
      this.currentPage = pg;
    }
  }
};
</script>

<style lang="less" scoped>
.notes-container {
  border-left: 1px solid black;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  /* justify-content: space-evenly; */
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  background-color: indianred;
  .holder {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    text-decoration: none;
  }
  .your-notes {
    width: 30%;
    padding-left: 3%;
    margin-bottom: 0;
    font-weight: bold;
    font-size: 1.4rem;
  }
  .sort-button {
    font-family: "Courier New", Courier, monospace;
    background-color: goldenrod;
    max-width: 120px;
    height: 30px;
    margin-top: 0;
    margin-right: 30%;
    border: 1px solid black;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    &:hover {
      background-color: white;
      color: darkslategray;
    }
  }
  .pages {
    display: flex;
    flex-flow: row;
    width: 15%;
    justify-content: space-around;
    p {
      font-size: 1.2rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
