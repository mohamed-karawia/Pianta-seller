<template>
  <div id="app">
    <splash v-if="showSplash" />
    <Navbar v-if="this.$route.name != 'Login'" />
    <router-view />
  </div>
</template>

<script>
import splash from './components/Splash/Splash.vue'
import Navbar from "./components/Navbar/Navbar";
export default {
  data() {
    return {
      showSplash: true,
    };
  },
  components: {
    Navbar,
    splash
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
    setTimeout(() => {
      this.showSplash = false;
    }, 1500);
  },
};
</script>

<style lang="scss">
@import "./sass/global.scss";

html {
  overflow-x: hidden;
  font-size: 62.5%; //1rem = 10px

  /*@media only screen and (max-width: 500px){
        font-size: 80%;
    }*/
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  //font-family: 'Gilroy', sans-serif;
  font-family: "Quicksand", sans-serif;
}

body {
  overflow-x: hidden;
  margin-top: 10rem;
  padding: 0 2rem;
  @media only screen and (max-width: 500px) {
  }
}
</style>
