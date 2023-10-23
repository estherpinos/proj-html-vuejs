<script>

import { store } from '../data/Store';
import Header from './Header.vue';
import Carousel from './partials/Carousel.vue';
import Cards from './partials/Cards.vue';
import Working from './partials/Working.vue';
import Contact from './partials/Contact.vue';
import Blog from './partials/Blog.vue';
import Footer from './Footer.vue';

const routes = [
  { path: '/section', component: Carousel }
]

export default{
    name: 'Main',
    data() {
        return {
            store
        };
    },
    components: {
      Header,
      Carousel,
      Cards,
      Working,
      Contact,
      Blog,
      Footer
     },
     methods: {
    scrollToSection() {
      const section = document.getElementById('sectionId');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
  
  
  }
}
</script>

<template>
  <header  id="sectionId"></header>
  <main>

    <!-- Jumbotron -->
    <Carousel></Carousel>


    <!-- Section 1 -->
    <section class="section1 position-relative ">
      <div class="row">
       <Cards v-for="(item,index) in store.images"
       :key="index"
       :image="item.src">
      </Cards>
      </div>
      <button class="btn-menu2 d-flex justify-content-center align-items-center" @click="scrollToSection">
          <img src="svg-2.svg" alt="">
      </button>
    </section>


    <!-- Section Working -->

    <section class="position-relative ">
      <Working></Working>
      <button class="btn-menu d-flex justify-content-center align-items-center" @click="scrollToSection">
          <img src="svg-2.svg" alt="">
       </button>
    </section>
  


    <!-- Section contact -->
      <Contact></Contact>
    


    <!-- Section blog -->
    <section class=" position-relative ">
      <div class="section-blog">
        <div class="row">
          <Blog v-for="(item, index) in store.blog"
          :key="index"
          :image="item.src"
          :text="item.text"
          :name="item.name"
          ></Blog>
        </div>
        <button class="btn-menu1 d-flex justify-content-center align-items-center" @click="scrollToSection">
          <img src="svg-2.svg" alt="">
        </button>
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

.btn-menu{
    border: none;
    padding: 8px;
    aspect-ratio: 1.1;
    background-color: $bg-green-light;
    position: absolute;
    bottom: -65px;
    right: 20px;
    

    img{
      width: 10px;

    }
  }
  .btn-menu1{
    border: none;
    padding: 8px;
    aspect-ratio: 1.1;
    background-color: $bg-green-light;
    position: absolute;
    top: 25px;
    right: 20px;
    

    img{
      width: 10px;

    }
  }

  .btn-menu2{
    border: none;
    padding: 8px;
    aspect-ratio: 1.1;
    background-color: $bg-green-light;
    position: absolute;
    bottom: 25px;
    right: 20px;
    

    img{
      width: 10px;

    }
  }





</style>