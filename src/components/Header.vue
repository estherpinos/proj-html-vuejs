<script>

export default{
  name:'Header',
  props:{
    menuHeader: Object
  }
}
</script>

<template>
  <div class="bar p-3 d-flex justify-content-between ">
    <div class="logo-bar d-flex align-items-center ">
      <img src="../assets/img/logo-sidearea-1.png" alt="">
    </div>
    <div class="menu-header d-flex align-items-center ">
      <nav>
        <ul class=" d-flex d-inline-block m-0 p-0">
          <li v-for="item in menuHeader">
            <a href="#">{{ item }}</a>
          </li>
          
        </ul>
      </nav>
      <div>
        <img class="header-dots" src="svg-1.svg" alt="">
      </div>
      
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../sass/variabiles' as *;

.bar{
  .logo-bar{
    img{
      width: 80px;
    }
  }
  .menu-header{
    nav{
      ul{
        list-style: none;
        li{
          text-decoration: none;

            a{
              text-decoration: none;
              color: $tx-black;
              font-weight: 600;
              text-transform: uppercase;
              font-size: 10px;
              padding-right: 28px;

              &::before{
                box-shadow: 0 5px 0px 0px salmon;
                display: block;
                position: absolute;
              }
              
            }   
              
        }
      }
    }

    .header-dots{
      width: 17px;
      margin-left: 2px;
      
    }
  }
}
</style>