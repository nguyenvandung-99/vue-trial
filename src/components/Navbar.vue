<template>
  <div id="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/cat">Categories</router-link>
    <router-link to="/random">Random</router-link>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style>
#navbar {
  overflow: hidden;
  padding: 1rem;
  border-bottom: solid #999 0.1rem;
  background-color: #fff;
  flex-shrink: 0;
}

#navbar a {
  text-decoration: none;
  color: #111;
  padding: 1rem 2rem;
}

#navbar a:hover {
  border: solid #999 0.1rem;
  background-color: #ee9;
}

@media (min-height: 400px) {
  /* only stick if it fits the screen*/
  #navbar {
    position: sticky;
    top: 0;
  }
}
</style>
