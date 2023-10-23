<script>

import { store } from '../data/Store';
import Carousel from './partials/Carousel.vue';
import Cards from './partials/Cards.vue';
import Working from './partials/Working.vue';
import Contact from './partials/Contact.vue';
import Blog from './partials/Blog.vue';
import Footer from './Footer.vue';

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
      Blog,
      Footer
     }
}
</script>

<template>
  <main>

    <!-- Jumbotron -->
    <Carousel></Carousel>


    <!-- Section 1 -->
    <section class="section1">
      <div class="row">
       <Cards v-for="(item,index) in store.images"
       :key="index"
       :image="item.src">
      </Cards>
      </div>
    </section>


    <!-- Section Working -->
    <Working></Working>


    <!-- Section contact -->
    <Contact></Contact>


    <!-- Section blog -->
    <section class="section-blog">
      <div class="row">
          <Blog v-for="(item, index) in store.blog"
          :key="index"
          :image="item.src"
          :text="item.text"
          :name="item.name"
          ></Blog>
        </div>
    </section>
    
  </main>

</template>

<style lang="scss" scoped>
@use '../sass/variabiles' as *;

.section-blog{
  width: 70%;
  margin: 0 auto;
  padding: 80px 0;
}





</style>