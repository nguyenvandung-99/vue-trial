<template>
  <div id="app">
    <Navbar/>
    <div id="content">
      <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
        <router-view/>
      </transition>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Navbar,
    Footer
  }
})

export default class App extends Vue{

  created() {
    document.title = 'Test App';
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

html {
  font-size: 100%;
  scroll-behavior: smooth;
}

html, body {
  margin: 0;
}

h1,h2,h3,h4,h5,h6 {
  text-align: center;
}

#content {
  margin-bottom: 2rem;
  flex-grow: 1;
}

#footer {
  flex-shrink: 0;
}

</style>
