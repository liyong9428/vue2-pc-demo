<template>
  <div class="activity">
    <p>当前位置：<router-link to="/">首页</router-link> / 社区活动</p>
    <div class="banner">
        <img src="https://ly809652226.github.io/imageserver/banner2.jpg">
    </div>
    <div class="main">
      <div class="left">
          <h4 class="title">社区活动</h4>
          <div class="content">
             <ul>
               <li v-for="item in activitys">
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
  name: "activity",
  data(){
    return {
       activitys: [
         {
            title: '滞销菜进社区，智慧我家建起爱心桥！',
            describe: '这几天，龙城太原人的朋友圈都被这段话刷屏了： 我们村的茴子白和西葫芦都长成了，可是茴子白降到了五分钱一斤、西葫芦三分钱一斤都没有人收，真是愁死人了！”太原市清徐县集义乡大常村的村民反映他们村里蔬菜滞销，许多光溜顺滑的西葫芦都被拿去喂...',
            num: '101',
            time: '2016-09-22'
         },
         {
            title: '智慧我家千峰店·粽子飘香来，端午送真情！',
            describe: '又是端午飘香季，为传承传统节庆文化，增进社区居民与智慧我家的感情，让社区特殊群体居民感受温暖。2016年6月3日上午智慧我家携手千峰社区开展了“粽子飘香来，端午送真情”包粽子活动。 6月3日一早，智慧我家与社区工作人员早早的精心准备了所...',
            num: '101',
            time: '2016-09-22'
         },
         {
            title: '我爱您，关爱老人健康进社区公益活动圆满举行',
            describe: '5月20日，即520，“我爱您”，在这个充满爱意的日子里，百善孝为先，“我爱您，关爱老人健康进社区”大型公益活动在漪汾苑日间照料中心隆重举行，太原市社区管理中心夏同杰处长，漪汾苑社区主任王主任及相关的领导出席了本次公益活动，同时对本次的公益...',
            num: '101',
            time: '2016-09-22'
         },
         {
            title: '智慧养生·关爱老人·我家助你健康一生！',
            describe: '为了增强中老年人的自我保健、防病强身的意识和能力，树立科学健康的生活方式，营造“人人享受健康”的氛围。2016年4月25日智慧我家在漪汾苑社区智慧我家门店举办“理性养生、健康一生”健康保健讲座，得到了许多老年人的青睐，纷纷报名参加！ 这次...',
            num: '101',
            time: '2016-09-22'
         },
         {
            title: '漪汾首届创意折纸大赛报名中',
            describe: '参与方式： 1、线上报名预约（点击左下方“阅读原文“进入报名） 2、报名完成，智慧我家漪汾苑门店参与活动。 3、孩子自己动手完成折纸后可参与微信平台投票评比活动。 4、报名手工费：2元 投票活动奖励： 一等奖：一等奖奖状+相册+智...',
            num: '101',
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
.activity {
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
