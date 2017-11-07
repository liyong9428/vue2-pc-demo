<template>
  <div class="headtop">
     {{content}}
  </div>
</template>

<script>
export default {
  name: "headtop",
  data(){
    return {
      content: '尽享智慧生活，让人人拥有幸福的家'
    }
  }
}
</script>
<style lang="less" scoped>
   .headtop {
      width: 100%;
      height: 50px;
      line-height: 50px;
      margin-bottom: 2px;
   }
</style>
