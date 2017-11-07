<template>
  <div class="foot">{{content}}</div>
</template>
<script>
export default {
  name: "foot",
  data(){
    return {
      content: '2014-2017 山西云尚天成网络科技有限责任公司　晋ICP备15009392号'
    }
  }
}
</script>
<style lang="less" scoped>
   .foot {
      width: 100%;
      height: 60px;
      background: #f7f7f7;
      line-height: 60px;
      border: 1px solid #ddd;
      border-radius: 5px;
      text-align: center;
      margin: 15px 0;
      font-size: 14px;
   }
</style>
