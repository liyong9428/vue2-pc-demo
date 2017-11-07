<template>
  <div class="story">
     <p>当前位置：<router-link to="/">首页</router-link> / 管家故事</p>
     <Banner></Banner>
     <div class="article">
       <header>
          <h1>管家故事</h1>
       </header>
        <div class="detail">
          <p>你计算过吗？</p>
          <p>忙碌的生活中，有多少时间被家务占用</p>
        </div>
        <div class="img">
           <img src="https://ly809652226.github.io/imageserver/story1.png">
        </div>
        <div class="detail">
          <p>你有多长时间没有</p>
          <p>给自己充电、看书、健身、听音乐</p>
        </div>
        <div class="img">
           <img src="https://ly809652226.github.io/imageserver/story2.png">
        </div>
        <div class="detail">
          <p>你有多长时间没有</p>
          <p>与朋友分享生活中的喜怒哀乐</p>
        </div>
        <div class="img">
           <img src="https://ly809652226.github.io/imageserver/story3.png">
        </div>
        <div class="detail">
           <p>你有多长时间没有</p>
           <p>陪伴孩子成长、聊天、游戏……</p>
        </div>
        <div class="img" style="margin-right:0">
           <img src="https://ly809652226.github.io/imageserver/story4.png">
        </div>
        <div class="detail">
          <p>你有多长时间没有</p>
          <p>陪伴年迈的父母吃饭、聊天、散步……</p>
          <p>时光偷走的，永远是你看不见的珍贵！</p>
          <p>没时间处理家务？</p>
          <p>生活琐事怎么办？</p>
          <p>能否约个管家帮忙？</p>
        </div>
        <div class="img">
            <img src="https://ly809652226.github.io/imageserver/story5.png">
        </div>
        <div class="detail">
           <h2>智慧我家·家事代理</h2>
           <p>智慧我家·家事代理就是针对龙城太原社区中忙碌的75后、年轻家庭以及老年人们提供家事解决方案</p>
           <p>和家事全托管或者部分托管的家庭服务，让这些家庭从琐碎家事中解放出来，将这些“被错过的时光”</p>
           <p>还给用户，还给社区家庭。</p>
        </div>
        <div class="img">
            <img src="https://ly809652226.github.io/imageserver/story6.png">
        </div>
        <div class="detail">
          <h2>智慧我家管家</h2>
          <p>智慧我家管家是智慧我家服务中的核心，管家上门跟踪服务，确保客户服务体验</p>
          <p>为客户把好检验的第一关。同时也可以实现全程托管服务，您可尽情享受自己的美好时光，提高生活品质。</p>
        </div>
        <div class="img">
            <img src="https://ly809652226.github.io/imageserver/story7.png">
        </div>
     </div>
  </div>
</template>
<script>
// 引入Banner组件
import Banner from '../common/Banner'

export default {
  name: "story",
  data(){
     return {}
  },
  components: {
    Banner
  }
}
</script>
<style lang="less" scoped>
.story {
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
     padding: 10px 10%;
     box-sizing: border-box;
     overflow: hidden;
     header {
        h1 {
          margin-bottom: 30px;
          margin-top: 10px;
          font-size: 18px;
          line-height: 1.5;
        }
     }
     .detail {
         p {
            color: #333;
            width: 100%;
            text-align: center;
            line-height: 28px;
            font-size: 15px;
         }
         h2 {
            text-align: center;
            line-height: 40px;
            height: 40px;
         }
     }
     .img {
        width: 100%;
        border: 1px solid #eee;
        box-sizing: border-box;
        border-radius: 3px;
        padding: 5px;
        text-align: center;
        margin: 40px 0;
        img {
           max-width: 100%;
           width: 100%;
        }
     }
  }
}
</style>
