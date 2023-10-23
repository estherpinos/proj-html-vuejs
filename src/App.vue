<script>

import { store } from './data/Store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default{
    name:'App',
    components:{
      Header,
      Main,
      Footer
    },
    data(){
      return{
        store
      }
    }
}
</script>

<template>
  <Header :menuHeader="store.menuHeader"></Header>
  <Main></Main>
  <Footer></Footer>

  
</template>

<style lang="scss">

</style>
