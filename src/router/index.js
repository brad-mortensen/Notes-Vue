import Vue from 'vue'
import Router from 'vue-router'
import NotesList from '../components/NotesList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/notes',
      name: 'notes',
      component: NotesList
    }
  ]
})
