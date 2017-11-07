<template>
  <div class="synopsis">
     <p>当前位置：<router-link to="/">首页</router-link> / 公司简介</p>
     <Banner></Banner>
     <div class="article">
         <header>
            <h1>智慧我家简介</h1>
         </header>
         <section>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; 山西云尚天成网络科技有限责任公司，创建于2014年，发起成立依托的是太原我爱我家在太原房产经纪领域十几年的业务体量和行业发展的地位以及社会影响力。在国家经济发展转型升级、提高民生服务、提高社区居民生活水平的背景下，结合互联网+思维，结合大众创业万众创新的时代背景，推出了“智慧我家”项目。</p><br>
              <p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;智慧我家项目以十二个互联网风口之一的社区家庭生活服务为商业发展定位，率先以围绕建设社区家庭服务综合平台为出发点，通过自主研发互联网技术的线上虚拟云商业交易系统平台和独创的线下实体的社区家庭服务中心类前台模式以及12349社区电话服务热线系统的协同植入，形成了具备提供社区家庭居民在社区生活方方面面的服务。</p><br>
         </section>
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
  name: "synopsis",
  data(){
     return {}
  },
  components: {
    Banner
  }
}
</script>
<style lang="less" scoped>
.synopsis {
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
     header {
        padding: 10px 20px;
        h1 {
          margin-bottom: 0;
          margin-top: 10px;
          font-size: 18px;
          line-height: 1.5;
        }
     }
     section {
        padding: 10px 20px;
        font-size: 14px;
        line-height: 2;
        p {color: #1f2d3d}
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
