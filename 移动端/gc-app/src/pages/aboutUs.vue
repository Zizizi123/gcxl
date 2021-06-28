<template>
  <div class="aboutUs">
    <mt-header title="关于我们" class="toubu" fixed>
        <mt-button icon="back" @click.native="$router.back(-1)" slot="left"></mt-button>
    </mt-header>
    <br>  <br>  <br> <br> <br>
    <div>
      <p style="text-align: center;font-size: 18px">组长：林义</p>
      <p style="text-align: center;font-size: 18px">组员：薛佳晔</p>
      <p style="text-align: center;font-size: 18px">组员：郑志伟</p>
      <p style="text-align: center;font-size: 18px">组员：林于杰</p>
    </div>

    <br><br><br><br>
  </div>

</template>

<script>


</script>

<style lang="scss" scoped>
@import '../assets/css/function';
.aboutUs{
.toubu{
    height: 55px;
    background-color: #096dd9;
  }
}
</style>
