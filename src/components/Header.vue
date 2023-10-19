<script>

export default{
  name:'Header'
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
          <li><a href="#">Home</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Elements</a></li>
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
              text-transform: uppercase;
              font-size: 10px;
              padding-right: 25px;

              
            }

            
              
        }
      }
    }

    .header-dots{
      width: 12px;
      margin-left: 5px;
      
    }
  }
}
</style>