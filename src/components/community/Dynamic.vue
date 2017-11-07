<template>
  <div class="dynamic">
    <p>当前位置：<router-link to="/">首页</router-link> / 社区动态</p>
    <div class="banner">
        <img src="https://ly809652226.github.io/imageserver/banner2.jpg">
    </div>
    <div class="main">
      <div class="left">
          <h4 class="title">社区动态</h4>
          <div class="content">
             <ul>
               <li v-for="item in dynamics">
                 <a href="#">{{item.title}}</a>
                 <span>
                    <i class="iconfont icon-ai-eye"></i> {{item.num}}
                    <i class="iconfont icon-shijianzhongbiao2"></i> {{item.time}}
                 </span>
                 <p>{{item.describe}}</p>
               </li>
             </ul>
          </div>
      </div>
      <Right></Right>
    </div>
  </div>
</template>
<script>
// 引入文章分类和联系方式组件
import Right from '../common/ClassContact'

export default {
  name: "dynamic",
  data(){
    return {
       dynamics: [
          {
             title: '免费领取老年运动休闲裤',
             describe: '老年春秋运动休闲裤特点 1、下蹲不漏腰，弯腰不下滑、长短腰肥都能穿。 2、弹力大、不起球、不缩水、不退色，超保暖。 3、细密小毛圈，无数个透气孔，吸湿排干效果好，良好的透气性，运动后不粘皮肤，提高舒适度。 4、无论洗多少次还是一样弹力十...',
             num: '102',
             time: '2016-09-22'
          },
          {
             title: '杏花岭区：全区村（社区）法律顾问全覆盖',
             describe: '12月14日从杏花岭区获悉，该区已为147个村（社区）全部配备法律顾问，并且签订“聘请法律顾问协议”，实现了全区村（社区）法律顾问全覆盖。 杏花岭区根据村（社区）的数量和律师分布情况，采取区司法局推荐律师事务所、律师事务所指派律师的形式，通...',
             num: '101',
             time: '2016-09-22'
          },
          {
             title: '雾霾天戴哪种口罩才能更好防护 你选对了吗？',
             describe: '进入冬季，雾霾天增多，防雾霾口罩成了香饽饽。然而，面对市面上琳琅满目的防雾霾口罩，不少消费者犯了难：哪种口罩能起到更好的防护作用？防雾霾口罩究竟有没有统一标准？11月起，我国首个民用防护口罩国家标准——《日常防护型口罩技术规范》正式实施。自...',
             num: '101',
             time: '2016-09-22'
          },
          {
             title: '太原又有5条小街巷改造基本完工 开化寺街已放行',
             describe: '目前，太原又有五条小街巷的施工进入收尾阶段，其中，开化寺街已正式放行，羊市街、旧城街、通顺巷、康乐街南巷的路面施工已完成，待交通设施完善后，将具备通行条件。届时，解放路、新建路的交通压力会有所减缓。 开化寺街已正式放行 12月13日，记者实...',
             num: '102',
             time: '2016-09-22'
          },
          {
             title: '政府出钱为老年人购买居家养老服务',
             describe: '12月6日，太原市民政局、市财政局公布《政府购买居家养老服务实施方案 (试行)》明确，太原市将以政府购买服务的方式，对符合条件的老年人，按照每人每月100元的标准，提供居家养老服务。 服务对象：六城区等符合条件的老年人 政府购买居家养老...',
             num: '103',
             time: '2016-09-22'
          }
       ]
    }
  },
  components: {
    Right
  }
}
</script>
<style lang="less" scoped>
.dynamic {
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
    .banner {
        margin-top: 15px;
        img {
           max-width: 100%;
           width: 100%;
        }
    }
    .main {
        width: 100%;
        height: 600px;
        margin-top: 15px;
        border-radius: 5px;
        .left {
           width: 79%;
           height: 600px;
           float: left;
           h4 {
             font-size: 16px;
           }
           .content {
               width: 99.8%;
               height: 553px;
               li {
                  height: 80px;
                  padding: 15px;
                  overflow: hidden;
                  border-bottom: 1px solid #ddd;
                  &:hover {
                     background: #F5F5F5;
                  }
                  a {
                     color: #333;
                     font-weight: bold;
                     &:hover {color: #0D3D88}
                  }
                  p {
                     margin-top: 10px;
                     line-height: 1.5;
                     margin-bottom: 10px;
                  }
                  span {
                     font-size: 13px;
                     color: #757575;
                     font-weight: normal;
                     float:right;
                     i {
                        font-size: 13px;
                        margin-left: 10px;
                     }
                  }
               }
           }
        }
    }
}
</style>
