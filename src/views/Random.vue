<template>
  <div>
    <h1>Randomizer</h1>
    <entry-component :entry="random"/>
    <button 
    class="random-button" 
    @click="getRandom">Randomize another entry</button>
  </div>
</template>

<script lang='ts'>
import { mapState, mapMutations } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import { Entry } from '@/types';
import EntryComponent from '@/components/Entry.vue';

@Component({
  components: {
    EntryComponent,
  },
  computed: {
    ...mapState([
      'random'
    ]),
  },
  methods: {
    ...mapMutations(['getRandom']),
  },
})

export default class Random extends Vue{
  
  random!: Entry;
  getRandom!: () => void;

  created() {
    document.title = 'Random Entry';
    this.getRandom();
  }
}
</script>

<style>
.random-button {
  padding: 0.5rem;

}
</style>