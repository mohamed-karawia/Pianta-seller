<template>
  <div id="app">
    <Navbar v-if="this.$route.name != 'Login'" />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar'
export default {
  components:{
    Navbar
  },
  created(){
    this.$store.dispatch('tryAutoLogin');
  }
}
</script>

<style lang="scss">
@import './sass/global.scss';

html{
    overflow-x: hidden;
    font-size: 62.5%; //1rem = 10px


   /*@media only screen and (max-width: 500px){
        font-size: 80%;
    }*/
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  //font-family: 'Gilroy', sans-serif;
  font-family: 'Quicksand', sans-serif;
}

body{
  overflow-x: hidden;
  margin-top: 10rem;
  padding: 0 2rem;
  @media only screen and (max-width: 500px){

  }
}
</style>
