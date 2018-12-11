import Vue from 'vue'
import Router from 'vue-router'
import NotesList from '../components/NotesList.vue'
import AddForm from '../components/AddForm.vue'
import SingleNote from '../components/SingleNote.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/notes/', 
      name: 'notes', 
      component: NotesList,
      children: [
        {path: ':id', name: 'singleNote', component: SingleNote}
      ]
    },
    {path: '/addnote/', name: 'add', component: AddForm}
  ]
})
