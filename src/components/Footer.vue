<template>
  <div id="footer">
    <h1 class="footer-text">Test app</h1>
    <div class="footer-link">
      <router-link to="/">Home</router-link>
      <router-link to="/cat">Categories</router-link>
      <router-link to="/random">Random</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style>
#footer {
  padding-bottom: 2rem;
  border-top: solid #999 0.1rem;
  margin-top: 1rem;
  background-color: #aaa;
}

.footer-text {
  text-align: center;
  padding-bottom: 0.5rem;
}

.footer-link {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.footer-link a {
  flex: 0 1 20rem;
  text-decoration: none;
  color: #333;
}

.footer-link a:hover {
  color: #fff;
}
</style>
