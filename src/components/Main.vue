<script>

import { store } from '../data/Store';
import Carousel from './partials/Carousel.vue';
import Cards from './partials/Cards.vue';
import Working from './partials/Working.vue';
import Contact from './partials/Contact.vue';

export default{
    name: 'Main',
    data() {
        return {
            store
        };
    },
    components: { 
      Carousel,
      Cards,
      Working,
      Contact,
     }
}
</script>

<template>
  <main>

    <!-- JUMBOTRON -->
    <Carousel></Carousel>
   

    <!-- SECTION 1 BLOG -->
    <section class="section1">
      <div class="row">
       <Cards v-for="(item,index) in store.images"
       :key="index"
       :image="item.src">
      </Cards>
      <Working></Working>
      </div>
    </section>
  </main>

</template>

<style lang="scss" scoped>
@use '../sass/variabiles' as *;

  
  


</style>