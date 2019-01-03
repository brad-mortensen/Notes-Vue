import Vue from 'vue'
import NotesList from '@/components/NotesList'

describe('NotesList.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue(NotesList).$mount()
    expect(vm.sortedAZ).toBe(false)
    expect(vm.sortedZA).toBe(false)
  })
})
