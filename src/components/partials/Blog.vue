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
      <div class="card border-0 p-0 ">
        <img :src="getImagePath(image)" alt="">
        <div class="card-body p-0 ">
          <p class="text-card">{{ text }}</p>
          <p class="name-card">{{ name }}</p>

        </div>

      </div>
   

    </div>

</template>

<style lang="scss" scoped>

@use '../../sass/variabiles' as *;

.card{
  margin: 0 10px;

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