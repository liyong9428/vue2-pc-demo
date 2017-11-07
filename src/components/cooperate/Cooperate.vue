<template>
  <div class="cooperate">
      <p>当前位置：<router-link to="/">首页</router-link> / 商务合作</p>
      <Banner></Banner>
      <div class="article">
          <div>
             <img src="https://ly809652226.github.io/imageserver/hezuo.png">
          </div>
          <div class="footer">
              <span>关键字</span>：家政招商,招商
          </div>
      </div>
  </div>
</template>
<script>
// 引入Banner组件
import Banner from '../common/Banner'

export default {
  name: "cooperate",
  data(){
    return {}
  },
  components: {
    Banner
  }
}
</script>
<style lang="less" scoped>
.cooperate {
   width: 100%;
   margin-top: 10px;
   p {
     width: 100%;
     font-size: 14px;
     color: #808080;
     a {
        color: #555;
     }
   }
   .article {
      width: 100%;
      height: 680px;
      margin-top: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
      img {

        max-width: 100%;
      }
      .footer {
          width: 100%;
          height: 80px;
          border-top: 1px dotted #ccc;
          font-size: 14px;
          line-height: 80px;
          span {
             font-weight: bold;
             color: #666;
             margin-left: 50px;
          }
      }
   }
}
</style>
