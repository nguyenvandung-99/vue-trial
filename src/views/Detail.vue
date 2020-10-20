<template>
  <div>
    <entry-component :entry="entry"/>
    <h4 v-if="related.length === 0"
    class="animate__animated animate__pulse animate__3 loading">
      Loading related...
    </h4>
    <div v-else class="related">
      <h3>See also</h3>
    </div>
    <entries-component :entries="related"/>
  </div>
</template>

<script lang="ts">
import { mapState, mapMutations } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import { Entry, Entries } from '@/types';
import EntryComponent from '@/components/Entry.vue';
import EntriesComponent from '@/components/Entries.vue';

@Component({
  components: {
    EntryComponent,
    EntriesComponent,
  },
  computed: {
    ...mapState([
      'entry',
      'related',
    ]),
  },
  methods: {
    ...mapMutations(['viewEntry']),
  }
})

export default class Detail extends Vue {
    
  entry!: Entry;
  related!: Entries;
  viewEntry!: () => void;

  created() {
    document.title = 'Entry Detail';
    this.viewEntry();
  }

}
</script>

<style>

.related {
  padding-top: 0;
}

</style>