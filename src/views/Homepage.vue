<template>
  <div class="home">
    <h1>Welcome to my app!</h1>
    <div class="home-sort">Sort option: 
      <select 
      v-model="sort"
      @change="sortEntries(sort)">
        <option value="">None</option>
        <option value="TitleUp">Title a-z</option>
        <option value="TitleDown">Title z-a</option>
        <option value="CatUp">Category a-z</option>
        <option value="CatDown">Category z-a</option>
      </select>
    </div>
    <div v-if="loading" class="animate__animated animate__pulse animate__3 loading">
      Loading...
    </div>
    <entries-component :entries="sorted"/>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import { Entries } from '@/types';
import EntriesComponent from '@/components/Entries.vue';

@Component({
  components: {
    EntriesComponent,
  },
  computed: {
    ...mapState([
      'entries',
    ]),
  },
  methods: {
    ...mapActions(['fetchEntries',]),
  },
})

export default class Homepage extends Vue {

  entries!: Entries;
  sorted: Entries = [];
  fetchEntries!: () => void;
  
  private loading = true;
  private sort = '';
  private sortEntries(sort: string): void {
    const sorted: Entries = JSON.parse(JSON.stringify(this.entries));
      switch (sort) {
        case 'TitleUp': {
          sorted.sort((a,b) => (a.API > b.API ? 1 : -1));
          break;
        }
        case 'TitleDown': {
          sorted.sort((a,b) => (a.API < b.API ? 1 : -1));
          break;
        }
        case 'CatUp': {
          sorted.sort((a,b) => (a.Category > b.Category ? 1 : -1));
          break;
        }
        case 'CatDown': {
          sorted.sort((a,b) => (a.Category < b.Category ? 1 : -1));
          break;
        }
        default: {
          break;
        }
      }
    this.sorted = sorted;
  }
  
  created(): void {
    document.title = 'Home Page';
  }
  async mounted(): Promise<void> {
    await this.fetchEntries(); // finish fetching first then set loading to false
    this.sorted = JSON.parse(JSON.stringify(this.entries));
    this.loading = false;
  }
}

</script>

<style>

.home-sort {
  padding-bottom: 2rem;
}

</style>
