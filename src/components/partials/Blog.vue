<script>

export default{
  name:'Blog',
  props:{
    image:String,
    text:String,
    name:String,
  },
  methods:{
    getImagePath(img){
            return new URL(`../../assets/img/${img}`, import.meta.url).href;
            }
  
  }
  

  

}
</script>

<template>
    <div class="col-4 p-0 ">
      <div class="card border-0 p-0">

        <div>
          <img class=" position-relative img-blog" :src="getImagePath(image)" alt="">
          <div class="flags position-absolute ">
            <div class="body-flag-green">07</div>
            <div class="body-flag-orange">MAY '19'</div>

            <div class="triangle-left"></div>
            <div class="triangle-right"></div>
          </div>
        </div>
    
      
        <div class="card-body p-0">
          <p class="text-card p-0  m-0 ">{{ text }}</p>
          <p class="name-card">{{ name }}</p>

         

        </div>

      </div>
   

    </div>

</template>

<style lang="scss" scoped>

@use '../../sass/variabiles' as *;

.card{
  margin: 0 10px;

  .img-blog{
    width: 100%;
    position: relative;
  }

    .flags{

    position: absolute;
    top: -6%;
    left: 10px;
    .body-flag-green{
      width:40px;
      background-color: $bg-green-light;
      text-align: center;
      font-family: 'Metal', serif;
      font-style: italic;
      font-size: 20px;
      font-weight: 600;
    }

    .body-flag-orange{
      width: 40px;
      background-color: $tx-salmon;
      text-align: center;
      font-family: 'Metal', serif;
      font-style: italic;
      font-size: 9px;
      font-weight: 600;
      padding: 5px 0;
      position: relative;
    }

    .triangle-left{
    
      width: 40px;
      height: 0;
      border-left: 20px solid $tx-salmon; 
      border-right: 5px solid transparent; 
      border-bottom: 10px solid transparent;
      position: absolute;
      bottom: 0;
      
    }

    .triangle-right{
    
    width: 40px;
    height: 0;
    border-left: 5px solid transparent; 
    border-right: 20px solid $tx-salmon; 
    border-bottom: 10px solid transparent;
    }

    }


    .text-card{
      font-size: 15px;
      font-weight: 500;
      padding-top: 15px;
    }

    .name-card{
      font-size: 8px;
      font-style: italic;
      font-weight: 700;
    }




  
}
</style>