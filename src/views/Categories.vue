<template>
  <div>
    <h1>Categories</h1>
    <ul class="categories">
      <li
      v-for="category in categories"
      :key="category">
        <h4>{{ category }}</h4>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { mapState, mapMutations } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    ...mapState([
      'categories',
    ]),
  },
  methods: {
    ...mapMutations(['categorize']),
  },
})

export default class Random extends Vue{
  
  categories!: string[];
  categorize!: () => void;
  
  created() {
    document.title = 'Categories';
  }

  mounted() {
    this.categorize();
  }
}
</script>

<style>

.categories {
  list-style-type: none;
  padding: 0.1rem 0.5rem 0rem;
}

</style>