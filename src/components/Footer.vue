<script>

import { store } from '../data/Store';

export default{
  name:'Footer',
  data(){
    return{
      store
    }
  }
}
</script>

<template>

  <footer>

    <div class="contents d-flex flex-row align-items-center justify-content-between ">

      <div class="logo">
      <img src="../assets/img/logo-sidearea-1.png">
      <p class=" p-0 ">Let's Get Creative</p>
      </div>

      <div class="contact">
        <p class=" m-0 p-0 ">maree.qode@gmail.com</p>
        <p class=" m-0 p-0  ">+44645 321 789</p>
      </div>

      <div class="location">
        <p class=" m-0 p-0">Avenue d'Auderghem 10</p>
        <p class=" m-0 p-0 ">1040 Brussels, Belgium</p>
      </div>

      <div class="social">
        <p class=" m-0 p-0">Stay in touch with us</p>
        <div>
         <i class="px-2" v-for="item in store.footer"
         :class=item></i>
        </div>
      </div>

    </div>

   

  </footer>

</template>

<style lang="scss" scoped>

@use '../sass/variabiles' as *;

footer{
  padding: 25px 0;
  background-color: $bg-green-dark;

  .contents{
    height: 100%;
    width: 70%;
    margin: 0 auto;
      img{
        width: 90px;
      }

      p{
        font-size: 11px;
        padding: 20px;
      }

      .social{
        i{
          font-size: 12px;
        }
      }
  }
}
</style>