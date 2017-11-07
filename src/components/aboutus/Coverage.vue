<template>
  <div class="coverage">
     <p>当前位置：<router-link to="/">首页</router-link> / 媒体报道</p>
     <div class="banner">
         <img src="https://ly809652226.github.io/imageserver/banner2.jpg">
     </div>
     <div class="main">
       <div class="left">
           <h4 class="title">媒体报道</h4>
           <div class="content">
              <ul>
                <li v-for="item in coverages">
                    <a href="#">{{item.title}}</a>
                    <span>
                       <i class="iconfont icon-ai-eye"></i> {{item.num}}
                       <i class="iconfont icon-shijianzhongbiao2"></i> {{item.time}}
                    </span>
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
  name: "coverage",
  data(){
     return {
        coverages: [
          {
             title: '新华网太原-首个智能社区便民服务平台“智慧我家”启动',
             num: '101',
             time: '2016-09-22'
          },
          {
             title: '网易新闻-智慧我家服务龙城百姓',
             num: '101',
             time: '2016-09-22'
          },
          {
             title: '山西网络广播-“智慧我家”进入省城社区并投入使用',
             num: '101',
             time: '2016-09-22'
          },
          {
             title: '太原日报-“智慧我家”方便社区老人',
             num: '101',
             time: '2016-09-22'
          },
          {
             title: '山西新闻网-太原今年将建百家“智慧我家”',
             num: '101',
             time: '2016-09-22'
          },
          {
             title: '太原老军营小区第一社区：社区智慧我家——省钱又放心',
             num: '101',
             time: '2016-09-22'
          },
          {
             title: '山西新闻网-家门口有了“智慧我家管家”，免费上门陪老人聊天',
             num: '101',
             time: '2016-09-22'
          },
          {
             title: '中华网太原-市民政局打造的智慧社区项目“智慧我家”已启动',
             num: '101',
             time: '2016-09-22'
          },
          {
             title: '新华网-太原首个智能社区便民服务平台“智慧我家”启动',
             num: '101',
             time: '2016-09-22'
          },
          {
             title: '网易新闻-智慧我家服务龙城百姓',
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
.coverage {
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
                  height: 50px;
                  line-height: 50px;
                  border-bottom: 1px solid #ddd;
                  text-indent: 1em;
                  text-align: left;
                  font-weight: bold;
                  a {
                    color: #333;
                    &:hover {
                      color: #0D3D88
                    }
                  }
                  span {
                     font-size: 13px;
                     color: #757575;
                     font-weight: normal;
                     float:right;
                     margin-right: 15px;
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
