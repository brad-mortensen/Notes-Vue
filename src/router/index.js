import Vue from 'vue'
import Router from 'vue-router'
import NotesList from '../components/NotesList.vue'
import AddForm from '../components/AddForm.vue'
import EditForm from '../components/EditForm.vue'
import SingleNote from '../components/SingleNote.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', redirect: 'notes' },
    {path: '/notes/', name: 'notes', component: NotesList,},
    {path: '/notes/:id', name: 'singleNote', component: SingleNote},
    {path: '/addnote/', name: 'add', component: AddForm},
    {path: '/editnote/:id', name: 'edit', component: EditForm}
  ]
})
