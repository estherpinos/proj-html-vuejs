<script>

import { store } from '../../data/Store';

export default{
  name:'Working',
  data(){
    return{
      store
    }
  },
  methods:{
    getImagePath(img){
      return new URL(`${img}`, import.meta.url).href;
    }
  
  }
}

</script>

<template>

  <section class=" p-5 position-relative ">

    <h2 class=" text-center ">Working process</h2>
    <div class="contents mt-5 mb-5">
      <img src="svg-3.svg ">
     
    </div>

    <div class="imgs-div position-absolute">
      <div class="row m-0 ">
        <div class="col-3 text-center">
          <div class=" d-flex flex-column align-items-center ">
            <div class="circle-wk text-center mb-4 ">
              <i class="fa-solid fa-lightbulb fa-2x" style="color:#BADAC9 ;"></i>
            </div>
        
            <h5>First theres an idea</h5>
            <p class=" text-muted ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, possimus.</p>
          </div>
        </div>

        <div class="col-3 text-center">
          <div class=" d-flex flex-column align-items-center ">
            <div class="circle-wk text-center mb-4 ">
              <i class="fa-regular fa-comment fa-2x" style="color: #F8D12D;"></i>
            </div>
        
            <h5>First theres an idea</h5>
            <p class=" text-muted ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, possimus.</p>
            </div>
        </div>

        <div class="col-3 text-center ">
            <div class=" d-flex flex-column align-items-center ">
              <div class="circle-wk text-center mb-4  ">
                <i class="fa-solid fa-cloud fa-2x" style="color: #80465F;"></i>
              </div>
        
              <h5>First theres an idea</h5>
              <p class=" text-muted ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, possimus.</p>
            </div>
        </div>
       
       <div class="col-3 text-center ">
          <div class=" d-flex flex-column align-items-center ">
            <div class="circle-wk text-center mb-4">
              <i class="fa-solid fa-pencil fa-2x" style="color:#ED816B ;"></i>
            </div>
        
            <h5>First theres an idea</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, possimus.</p>
          </div>
        </div>
      </div>
    </div>

  </section>

</template>

<style lang="scss" scoped>
@use '../../sass/variabiles' as *;


section{
  margin-bottom: 100px;
}
.contents{
  width: 60%;
  margin: 0 auto;

  img{
    width: 100%;
    height: 100%;
  }

}

.imgs-div{
  top: 120px;
  width: 70%;
  left: 50%;
  transform: translateX(-50%);

  .circle-wk{
    width: 120px;
    height: 120px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $bg-brown-light;

  }

  h5{
      font-size: 15px;
    }

    p{
      font-size: 12px;
      color: $tx-grey-dark-dark;
    
    }
}



</style>