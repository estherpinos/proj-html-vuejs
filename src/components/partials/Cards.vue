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
              <p class="title-hover p-0">Illustrations of novels</p>
              <p class="text-hover p-0">Illustration</p>
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

      &:hover .hover-cards{
        opacity: 1;
      }

      .hover-cards{
      width: 60%;
      height: 30%;
      padding-left: 20px;
      background-color: white;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title-hover{
        text-align: left;
        font-size: calc(0.6em + 1vw);
        line-height: 1em;
       

      }
      .text-hover{
        text-align: left;
        font-size: calc(0.3em + 1vw);
        line-height: 1em;
        font-family: 'Metal', serif;
        font-style: italic;
       
        
      }
    }

    }

    

</style>

