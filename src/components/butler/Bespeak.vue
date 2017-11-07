<template>
  <div class="bespeak">
     <p>当前位置：<router-link to="/">首页</router-link> / 慧管家</p>
     <Banner></Banner>
     <div class="article">
         <header>
            <h1>慧管家</h1>
         </header>
        <div class="img">
           <img src="https://ly809652226.github.io/imageserver/bespeak1.jpg">
        </div>
        <div class="img">
           <img src="https://ly809652226.github.io/imageserver/bespeak3.jpg">
        </div>
        <div class="img">
           <img src="https://ly809652226.github.io/imageserver/bespeak5.png">
        </div>
        <div class="img">
           <img src="https://ly809652226.github.io/imageserver/bespeak6.jpg">
        </div>
     </div>
  </div>
</template>
<script>
// 引入Banner组件
import Banner from '../common/Banner'

export default {
  name: "bespeak",
  data(){
     return {}
  },
  components: {
    Banner
  }
}
</script>
<style lang="less" scoped>
.bespeak {
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
     margin-top: 15px;
     border: 1px solid #ddd;
     border-radius: 5px;
     padding: 10px 20px;
     box-sizing: border-box;
     header {
        h1 {
          margin-bottom: 30px;
          margin-top: 10px;
          font-size: 18px;
          line-height: 1.5;
        }
     }
     .img {
        width: 99%;
        border: 1px solid #eee;
        border-radius: 3px;
        padding: 5px;
        margin-bottom: 50px;
        img {
           max-width: 100%;
        }
     }
  }
}
</style>
