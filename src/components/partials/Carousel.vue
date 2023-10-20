<script>

  export default{
    name:'Carousel'
  }
</script>

<template>
   <section class="jumbotron">
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">

          <!-- CAROUSEL 1 -->
          <div class="carousel-item active bg-white" data-bs-interval="10000">

            <div class="row w-100 h-100">
              <div class="left w-50 p-0 position-relative ">
                <div class="text-carousel position-absolute">
                  <h3>Devotion that never ends</h3>
                  <p>Neque porro quisquam est, qui dolorem ipsum quio dolor sit amet consectetur, adipisci velit, sed quia non numaquam eius modi.</p>
                  <button class="btn-read-more bg-transparent "> READ MORE</button>
                </div>
              </div>
              <div class="right w-50 p-0 bg-black position-relative  ">2</div>

            </div>

            <!-- <div class=" d-flex flex-row justify-content-between ">
          
                 Text
              <div class="position-relative d-flex flex-column border-2 left">
                <div class="text-carousel position-absolute">
                  <h3>Devotion that never ends</h3>
                  <p>Neque porro quisquam est, qui dolorem ipsum quio dolor sit amet consectetur, adipisci velit, sed quia non numaquam eius modi.</p>
                  <button class="btn-read-more bg-transparent "> READ MORE</button>
                </div>
                
              </div>

              <div class="img-carousel position-relative">

                  Persone
                  <img class="persona1" src="../../assets/img/h-2-slider-img-15.png">
                  <img class="persona2" src="../../assets/img/h-2-slider-img-16.png">

                  Foglie
                  <img class="pink-left" src="../../assets/img/short-slider-rev-1-img-2.png">
                  <img class="salmon-left" src="../../assets/img/short-slider-rev-1-img-10.png">
                  <img class="pink-right" src="../../assets/img/short-slider-rev-1-img-6.png">
                  <img class="purple-right" src="../../assets/img/short-slider-rev-1-img-7.png">
                  <img class="green-left" src="../../assets/img/short-slider-rev-1-img-8.png">
                  <img class="group-flower" src="../../assets/img/h-2-slider-img-17.png">
                  
                </div>
            </div> -->
           

          

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
</template>

<style lang="scss" scoped>
@use '../../sass/variabiles' as *;

.jumbotron{
    height: 350px;
    .carousel-item{
      height: 380px;

      .left{
        width: 50%;
        height: 100%;

        .text-carousel{
          width: 400px;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
        }

      }

      .right{
        width: 50%;
        height: 100%;
      }

      // .left{
      //   width: 50%;
      //   height: 100%;
      //   .text-carousel{
      //     position: absolute;
      //     width: 400px;
      //     top: 5%;
      //     right: 0;

      //   h3{
      //     font-size: 45px;
      //   }

      //   p{
      //     font-size: 12px;
      //   }

      //   .btn-read-more{
      //     padding: 8px;
      //     width: 100px;
      //     font-size: 12px;
      //     border: 1px solid $fill-salmon;

      //   }
      // }
      // }

      

      // .img-carousel{
      //   width: 50%;

      //   .persona1{
      //   height: 250px;
      //   position: absolute;
      //   top: 50%;
      //   transform: translateY(-50%);
      //   right: 350px;
      // }

      // .persona2{
      //   height:250px;
      //   position: absolute;
      //   top: 50%;
      //   transform: translateY(-50%);
      //   right: 150px;
      // }

      // // Flowers

      // .pink-left{
      //   position: absolute;
      //   top: 50px;
      //   right:540px;
      //   width: 35px;
      // }

      // .salmon-left{
      //   position: absolute;
      //   top: 200px;
      //   right: 600px;
      //   transform: scaleX(-1);
      //   width: 35px;
      // }

      // .pink-right{
      //   position: absolute;
      //   top: 100px;
      //   right: 140px;
      //   width: 35px;
      // }

      // .purple-right{
      //   position: absolute;
      //   transform: scaleX(-1);
      //   top: 25px;
      //   right: 180px;
      //   width: 40px;
      // }

      // .green-left{
      //   position: absolute;
      //   transform: scaleX(-1);
      //   bottom: 80px;
      //   right: 550px;
      //   width: 35px;
      // }

      // .group-flower{
      //   position: absolute;
      //   bottom: 70px;
      //   right: 100px;
      //   width: 50px;
      // }
      // }

      
      // Persons

    

    }

   

  }
</style>