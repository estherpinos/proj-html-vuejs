<script>
export default{
  name:'Cards',
  props:{
    image: String,
  },
  methods:{
    getImagePath(img){
            return new URL(`../../assets/img/${img}`, import.meta.url).href;
            }
  
  }
}
</script>

<template>
   <div class="col-4 p-0">
          <div class="card-product m-0 position-relative ">
            <img :src="getImagePath(image)">

            <div class="hover-cards position-absolute ">
              <p>Illustrations of novels</p>
              <p>Illustration</p>
            </div>
          </div>

         
   </div>

</template>

<style lang="scss" scoped>

 // CARD PRODUCT

    .card-product{
    background-color: red;
    aspect-ratio: 1.1;
       img{
        width: 100%;
      }
    }

    .hover-cards{
      width: 60%;
      height: 30%;
      padding: 5px 40px;
      background-color: white;
      top: 50%;

      & p{
        font-size: 70%;
      }
    }


</style>

