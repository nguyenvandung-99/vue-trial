import Vue from 'vue';
import Vuex from 'vuex';
import { Entry, Entries, Response } from '@/types';
import shortid from 'shortid';
const axios = require('axios').default;
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entries: JSON.parse(sessionStorage.getItem('entries') as string) as Entries | null || [] as Entries,
    entry: {} as Entry,
    related: [] as Entries, 
    random: {} as Entry,
    categories: [] as string[],
  },
  actions: {
    async fetchEntries({ commit, state }): Promise<void> {
      // get 10 random for each session of the app and load it to entries
      const currentEntries: Entries = JSON.parse(JSON.stringify(state.entries));
      if (currentEntries.length !== 0) { // if sessionStorage already has entries, stop fetching
        return;
      } else {
        const entries: Entries = [];
        let i;
        for (i = 0; i < 10; i++) {
          await axios.get('https://api.publicapis.org/random')
          .then((res: Response) => {
            entries.push({
              ...res.data.entries[0],
              id: shortid.generate(),
            });
          });
        } 
        sessionStorage.setItem('entries', JSON.stringify(entries));
        commit('fetchEntries', entries);
      }
    }, 
  },
  mutations: {
    fetchEntries: (state, entries: Entries) => {
      state.entries = entries;
    },
    viewEntry: (state) => {
      // get entry from store and find 3 related entries
      const entries: Entries = JSON.parse(JSON.stringify(state.entries));
      // the next two steps get the id from url
      const idPrefix: number = document.location.pathname.indexOf('detail'); // works on both localhost and github
      const id: string = document.location.pathname.slice(idPrefix+7,idPrefix+17); // id is built to have 10 characters
      // get entry from id by finding in entries
      const index: number = entries.findIndex(entry => entry.id === id)
      const entry: Entry = entries[index];
      // a random algorithm for related entries
      const related: Entries = index <= 6 ?
      entries.slice(index + 1, index + 4) :
      entries.slice(index - 3, index);
      state.entry = entry;
      state.related = [];
      setTimeout(() => (state.related = related), 490); // delay equal to delay time of animation to prevent jarring effect
    },
    getRandom: (state) => {
      const entries: Entries = JSON.parse(JSON.stringify(state.entries));
      const random = entries[Math.floor(Math.random() * entries.length)];
      state.random = random
    },
    categorize: (state) => {
      const categories: string[] = JSON.parse(JSON.stringify(state.entries)) // get all entries
      .map((entry: Entry) => entry.Category) // extract category from each entry
      .filter((value: Entry, index: number, self: Entries) => self.indexOf(value) == index) // remove duplicates
      .sort((a: string, b: string) => (a > b ? 1 : -1)); // sort a-z
      state.categories = categories;
    },
  },
})