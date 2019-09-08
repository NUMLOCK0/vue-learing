<template>
  <div class="app">
<Nav></Nav>
  </div>
</template>
<script>
import Nav from "./views/Nav"
import Show from "./views/Show"

export default {
  name:"app",
  components:{
    Nav
  }
  
}
</script>
<style lang="scss">
@import url("./assets/iconfont/iconfont.css");
@import url("./assets/style/reset.scss");
.app{
   width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

</style>