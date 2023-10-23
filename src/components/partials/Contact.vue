<script>

export default{
  name:'Contact'
}

</script>

<template>
  <section>

    <div class="contents d-flex flex-column justify-content-center ">
      <h4>Want to work with us? Send us <span class="diferent-word">a message!</span></h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati perferendis atque magnam voluptates dolorum porro blanditiis. Repudiandae, excepturi expedita!</p>
      <button class=" btn-contact border-0 ">CONTACT</button>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../../sass/variabiles' as *;

section{
  height: 300px;
  background-image: url(../../assets/img/h-2-background-1.jpg);
  background-size: cover;
  background-position: center; 

    .contents{
      text-align: center;
      height: 100%;
      width: 70%;
      margin: 0 auto;

      h4{
        font-size: 35px;
        font-weight: 400;
        .diferent-word{
          font-family: 'Metal', serif;
          font-style: italic;
          font-weight: 600;
          font-size: 45px;
        }
      }

      p{
        font-size: 15px;
        color: $tx-grey-dark-dark;
      }

      .btn-contact{
        margin: 0 auto;
        width: 120px;
        padding: 8px 35px;
        background-color: $bg-green-light;
        font-size: 10px;

        &:hover{
          background-color: $bg-brown-dark;
          color:white;
        }
        
      }


      
    }
 
 
}


</style>