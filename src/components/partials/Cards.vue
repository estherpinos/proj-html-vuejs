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
          <div class="card-product m-0 ">
            <img :src="getImagePath(image)">
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


</style>

