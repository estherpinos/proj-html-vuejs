<script>

  export default{
    name:'Carousel'
  }
</script>

<template>
   <section class="jumbotron">
      <div id="carouselExampleDark" class="carousel carousel-dark slide">

        <!-- Dots -->
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
                  <h3>Devotion that never <span class="diferent-word">ends</span> </h3>
                  <p>Neque porro quisquam est, qui dolorem ipsum quio dolor sit amet consectetur, adipisci velit, sed quia non numaquam eius modi.</p>
                  <button class="btn-read-more"> READ MORE</button>
                </div>
              </div>
              <div class="right w-50 p-0">

                <div class="image-right position-relative">

                  <!-- Persone -->
                  <img class="persona1" src="../../assets/img/h-2-slider-img-15.png">
                  <img class="persona2" src="../../assets/img/h-2-slider-img-16.png">

                  <!-- Foglie -->
                  <img class="pink-left" src="../../assets/img/short-slider-rev-1-img-2.png">
                  <img class="salmon-left" src="../../assets/img/short-slider-rev-1-img-10.png">
                  <img class="pink-right" src="../../assets/img/short-slider-rev-1-img-6.png">
                  <img class="purple-right" src="../../assets/img/short-slider-rev-1-img-7.png">
                  <img class="green-left" src="../../assets/img/short-slider-rev-1-img-8.png">
                  <img class="group-flower" src="../../assets/img/h-2-slider-img-17.png">
                </div>
                
                 
              </div>

            </div>

          </div>

          <!-- CAROUSEL 2 -->
          <div class="carousel-item" data-bs-interval="2000">
            <div class="row w-100 h-100">
              <div class="left w-50 p-0 position-relative ">
                <div class="text-carousel position-absolute">
                  <h3>Devotion that never <span class="diferent-word">ends</span></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eum neque laudantium debitis perferendis architecto voluptatibus aliquid vero maxime alias.</p>
                  <button class="btn-read-more"> READ MORE</button>
                </div>
              </div>
              <div class="right w-50 p-0">

                <div class="image-right position-relative">

                  <!-- Persone -->
                  <img class="persona3" src="../../assets/img/h-2-slider-img-11.png">
                </div>
                
                 
              </div>

            </div>
          </div>

          <!-- CAROUSEL 3 -->
          <div class="carousel-item ">
            <div class="row w-100 h-100">
              <div class="left w-50 p-0 position-relative ">
                <div class="text-carousel position-absolute">
                  <h3>Devotion that never <span class="diferent-word">ends</span></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate perspiciatis saepe, nam veniam doloremque.</p>
                  <button class="btn-read-more "> READ MORE</button>
                </div>
              </div>
              <div class="right w-50 p-0">

                <div class="image-right position-relative">

                  <!-- Persone -->
                  <img class="persona4" src="../../assets/img/short-slider-rev-1-img-3.png">
                  

                  <!-- Foglie -->
                  <img class="salmon-left" src="../../assets/img/short-slider-rev-1-img-5.png">
                  <img class="green-left" src="../../assets/img/short-slider-rev-1-img-4.png">
                  <img class="group-flower" src="../../assets/img/short-slider-rev-1-img-5.png">
                </div>
                
                 
              </div>

            </div>

          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <i class="fa-solid fa-chevron-left" style="color: #ffffff;"></i>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../../sass/variabiles' as *;


.jumbotron{
    height: 350px;
    margin-bottom: 30px;

    .carousel-indicators{
        button{
          width: 6px; 
          height: 6px; 
          background-color: $border-brown; 
          margin-right: 10px;
          border-radius: 100%;

          &.active{
            transform: scale(1.3);
          }
        }
      }
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

          h3{
            font-size: 60px;
            font-weight: 200;

            .diferent-word{
              font-family: 'Metal', serif;
              font-style: italic;
              font-weight: 600;
              font-size: 70px;
            }
          }

          p{
            font-size: 12px;
          }

          .btn-read-more{
            border: 2px solid $fill-salmon;
            background-color: white;
            font-size: 10px;
            font-weight: 700;
            padding:  8px 25px;

            &:hover{
              background-color: $fill-salmon;
              color: white;


            }
          }
        }

      }

      .right{
        width: 50%;
        height: 100%;

        .image-right{
          width: 100%;
          height: 100%;

         .persona1{
          height: 250px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 45px;
         }

          .persona2{
          height:250px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 250px;
          }

          .persona3{
            position: absolute;
            width: 450px;
            left: 50%;
            transform: translateX(-50%);
            top: 20px;
          }
          .persona4{
            position: absolute;
            width: 300px;
            left: 50%;
            transform: translateX(-50%);
            top: 45px;
          }

          // Flowers
              .pink-left{
            position: absolute;
            top: 50px;
            left:20px;
            width: 35px;
          }

          .salmon-left{
            position: absolute;
            top: 180px;
            left: 5px;
            transform: scaleX(-1);
            width: 35px;
          }

          .pink-right{
            position: absolute;
            top: 100px;
            left: 430px;
            width: 35px;
            }

          .purple-right{
            position: absolute;
            transform: scaleX(-1);
            top: 25px;
            left: 380px;
            width: 40px;
          }

          .green-left{
            position: absolute;
            transform: scaleX(-1);
            bottom: 70px;
            left: 20px;
            width: 40px;
          }

          .group-flower{
            position: absolute;
            bottom: 70px;
            left:430px;
            width: 50px;
          }

        }
        

      }
    }

    .carousel-control-prev{
      width: 20px;
      height: 20px;
      border-radius: 100%;
      padding: 3px;
      background-color: $tx-salmon;
      top: 50%;
      transform: translateY(-50%);
      left: 2%;

      .fa-solid{
        font-size: 10px;
      }
     
    }

    .carousel-control-next{
      width: 20px;
      height: 20px;
      border-radius: 100%;
      padding: 3px;
      background-color: $tx-salmon;
      top: 50%;
      transform: translateY(-50%);
      right: 2%;

      .fa-solid{
        font-size: 10px;
      }
     
    }



   

  }
</style>