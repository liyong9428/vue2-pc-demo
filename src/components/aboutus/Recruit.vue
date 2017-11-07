<template>
  <div class="coverage">
     <p>当前位置：<router-link to="/">首页</router-link> / 招贤纳士</p>
     <div class="banner">
         <img src="https://ly809652226.github.io/imageserver/banner2.jpg">
     </div>
     <div class="main">
       <div class="left">
           <h4 class="title">招贤纳士</h4>
           <div class="content">
              <ul>
                <li>
                  <a href="#">智慧我家社区店-店主任，管家/接待</a>
                  <span>
                     <i class="iconfont icon-ai-eye"></i> 101
                     <i class="iconfont icon-shijianzhongbiao2"></i> 2016-09-22
                  </span>
                  <p>任职资格： 1.性别不限，20-40； 2.熟练使用office办公软件及自动化设备，具备基本的网络知识； 3.办事沉稳、细心、领悟能力强，性格温和，有良好的团队合作意识； 4.有服务行业等工作经验者优先 工作时间：9:00-18:00（单...</p>
                </li>
                <li>
                  <a href="#">外联/拓展主管</a>
                  <span>
                     <i class="iconfont icon-ai-eye"></i> 101
                     <i class="iconfont icon-shijianzhongbiao2"></i> 2016-09-22
                  </span>
                  <p>岗位职责： 1、拟定和贯彻实施公司社区开店计划（区域、家数、时间）； 2、代表公司前往社区进行考察、与社区主任洽谈、签订合同； 3、参与信息搜集，定期提交当地同行动态及相关政策信息； 4、完成领导下达的其它工作。   任...</p>
                </li>
                <li>
                  <a href="#">UI设计主管</a>
                  <span>
                     <i class="iconfont icon-ai-eye"></i> 101
                     <i class="iconfont icon-shijianzhongbiao2"></i> 2016-09-22
                  </span>
                  <p>岗位职责： 1.负责公司产品（Web+APP)所有页面的制作与维护以及网站其它艺术类作品的设计； 2.提交产品所需的页面，配合程序进行页面程序的整合； 3.定期对页面进行必要的更新； 4.负责公司产品图形、界面外观设计； 5.负责公司...</p>
                </li>
                <li>
                  <a href="#">测试</a>
                  <span>
                     <i class="iconfont icon-ai-eye"></i> 101
                     <i class="iconfont icon-shijianzhongbiao2"></i> 2016-09-22
                  </span>
                  <p>岗位职责： 1.分析项目测试需求、编写测试用例及相关测试文档、确定优先级； 2.提出对APP和后台的进一步改进的要求并评估改进方案是否合理 3.执行软件测试用例、记录测试结果； 4.提交测试缺陷，跟踪缺陷关闭； 任职资格： 1.软件测试、...</p>
                </li>
                <li>
                  <a href="#">PHP程序员</a>
                  <span>
                     <i class="iconfont icon-ai-eye"></i> 101
                     <i class="iconfont icon-shijianzhongbiao2"></i> 2016-09-22
                  </span>
                  <p>岗位职责： 1.根据需求完成微信和O2O系统应用编程方面的工作； 2.配合架构师完成php基础技术框架的开发   任职要求： 1.负责协助技术总监进行技术评测，bug处理，代码开发； 2.负责系统数据库、栏目、程序模块的...</p>
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
                  height: 70px;
                  padding: 15px;
                  border-bottom: 1px solid #ddd;
                  &:hover {
                     background: #F5F5F5;
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
                  a {
                     color: #333;
                     font-weight: bold;
                     &:hover {color: #0D3D88}
                  }
                  p {
                     margin-top: 10px;
                     line-height: 1.5;
                  }
               }
           }
        }
    }
}
</style>
