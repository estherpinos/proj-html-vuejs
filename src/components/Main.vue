<script>

export default{
  name:'Main'
}
</script>

<template>
  <main>
    <section class="jumbotron">
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active bg-dark" data-bs-interval="10000">
          </div>
          <div class="carousel-item bg-danger" data-bs-interval="2000">
          </div>
          <div class="carousel-item bg-body-secondary">

          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
         
        
     
    </section>
  </main>

</template>

<style lang="scss" scoped>
@use '../sass/variabiles' as *;

  .jumbotron{
    height: 350px;
    .carousel-item{
      height: 350px;
    }
    .div-1{
      width: 50%;
      height: 100%;
      border: 2px solid yellow;
    }
    .div-2{
      width: 50%;
      height: 100%;
      border: 2px solid red;
    }
   
      
    
  }


</style>