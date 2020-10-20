<template>
  <transition
    mode="out-in"
    enter-active-class="animate__animated animate__slideInLeft animate__faster"
    leave-active-class="animate__animated animate__slideOutRight animate__faster"
  >
    <div class="detail-entry" :key="entry.id">
      <h2>{{ entry.API }}</h2>
      <h3>
        {{ entry.Description }}
      </h3>
      <ul class="entry">
        <li>Auth: {{ entry.Auth }}</li>
        <li>HTTPS: {{ entry.HTTPS }}</li>
        <li>Cors: {{ entry.Cors }}</li>
        <li>Link: {{ entry.Link }}</li>
        <li>Category: {{ entry.Category }}</li>
      </ul>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Entry } from "@/types";

@Component
export default class EntryComponent extends Vue {
  private loading = false;
  @Prop(Object) readonly entry!: Entry;
}
</script>

<style>
.detail-entry {
  padding-bottom: 2rem;
  margin: 0 1rem;
}

.entry {
  line-height: 1.6;
  max-width: 35rem;
  padding: 0.8rem;
  border: 0.1rem #bbb solid;
  border-radius: 2rem;
  margin: auto;
  list-style-type: none;
  color: #111;
  text-align: left;
  font-size: 1rem;
  background-color: #c99;
}

.entry li {
  padding-left: 0.5rem;
}
</style>
