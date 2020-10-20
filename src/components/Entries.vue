<template>
  <transition-group
    tag="ul"
    enter-active-class="animate__animated animate__zoomIn animate__fast"
    leave-active-class="animate__animated animate__zoomOut animate__faster"
    class="entries"
  >
    <li v-for="entry in entries" :key="entry.id" @click="viewEntry()">
      <router-link :to="'/detail/' + entry.id">
        <h3>{{ entry.API }}</h3>
        <h4>{{ entry.Category }}</h4>
      </router-link>
    </li>
  </transition-group>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Entries } from "@/types";
import { mapMutations } from "vuex";

@Component({
  methods: {
    ...mapMutations(["viewEntry"]),
  },
})
export default class EntriesComponent extends Vue {
  viewEntry!: () => void;

  @Prop() readonly entries!: Entries;
  @Prop() readonly loading!: boolean;
}
</script>

<style>
.entries {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 2rem;
  list-style-type: none;
  color: #333;
}

.entries li {
  flex: 0 1 20rem;
  padding: 0.8rem;
  border: 0.1rem #bbb solid;
  border-radius: 2rem;
  margin: 0 1rem 1.5rem;
  background-color: #7b9;
}

.entries a {
  color: inherit;
  text-decoration: none;
}
</style>
