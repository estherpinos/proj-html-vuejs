<script>

export default{
  name:'Main'
}
</script>

<template>
  <main>
    <section class="section1">
      <div>
        <div class="jumbotron">
          <div class="text-jumbo"></div>
          <div class="img-jumbo"></div>
        </div>
        <div class="arrow-left"></div>
        <div class="arrow-right"></div>
      </div>
    </section>
  </main>

</template>

<style lang="scss" scoped>
@use '../sass/variabiles' as *;

.section1{
  .jumbotron{
    height: 350px;
    
  }
}

</style>