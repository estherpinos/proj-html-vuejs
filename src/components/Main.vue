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

          <!-- CAROUSEL 1 -->
          <div class="carousel-item active bg-white position-relative " data-bs-interval="10000">
            <div class="text-carousel d-flex flex-column justify-content-start">
              <h3>Devotion that never ends</h3>
              <p>Neque porro quisquam est, qui dolorem ipsum quio dolor sit amet consectetur, adipisci velit, sed quia non numaquam eius modi.</p>
              <button class="btn-read-more bg-transparent "> READ MORE</button>
            </div>
          </div>
          <!-- CAROUSEL 2 -->
          <div class="carousel-item bg-danger" data-bs-interval="2000">
          </div>
          <!-- CAROUSEL 3 -->
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
      height: 400px;

      .text-carousel{
        width: 325px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 50%;

        h3{
          font-size: 45px;
        }

        p{
          font-size: 12px;
        }

        .btn-read-more{
          padding: 8px;
          width: 100px;
          font-size: 12px;
          border: 1px solid $fill-salmon;
          
        }
      }
    }
    
   
      
    
  }


</style>