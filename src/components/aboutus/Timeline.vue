<template>
  <div class="timeline">
     <p>当前位置：<router-link to="/">首页</router-link> / 发展历程</p>
     <Banner></Banner>
     <div class="article">
         <header>
            <h1>发展历程</h1>
         </header>
         <section>
             <template v-for="item in timelines">
               <h1>{{item.year}}</h1>
               <p v-for="item1 in item.items"><span>{{item1.month}}</span>{{item1.incident}}</p>
             </template>
            <br>
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
  name: "timeline",
  data(){
     return {
        timelines: [
           {
              year: '2014年',
              items: [
                 {
                     month: '2014年11月',
                     incident: '山西云尚天成网络科技有限责任公司正式成立并启动“智慧我家”项目。'
                 }
              ]
           },
           {
              year: '2015年',
              items: [
                 {
                    month: '2014年11月',
                    incident: '山西云尚天成网络科技有限责任公司正式成立并启动“智慧我家”项目。'
                 },
                 {
                     month: '2015年01月',
                     incident: '国贸大饭店召开“智慧我家”项目新闻发布会'
                 },
                 {
                     month: "2015年08月",
                     incident: "智慧我家首批服务商家上线入驻签约"
                  },
                  {
                     month: "2015年08月",
                     incident: "湖滨国际大酒店召开“智慧我家”创始股东招募"
                  },
                  {
                     month: "2015年08月",
                     incident: "智慧我家APP1.0成功上线"
                  },
                  {
                     month: "2015年10月",
                     incident: "智慧我家社区家庭服务中心漪汾苑店、富力城店开业运营"
                  },
                  {
                     month: "2015年10月",
                     incident: "中共中央民政部副部长邹铭在山西省副省长张建新陪同下视察“智慧我家”漪汾店"
                  },
                  {
                      month: "2015年10月",
                     incident: "山西省各地级市民政局主管领导视察智慧我家漪汾店"
                  },
                  {
                     month: "2015年10月",
                     incident: "台湾负责智慧居家养老项目领导参观考察智慧我家漪汾店"
                  },
                  {
                     month: "2015年10月",
                     incident: "中共中央内司委主任、中央纪委副书记马馼在太原市委书记吴政隆的陪同下视察智慧我家漪汾店"
                  },
                  {
                     month: "2015年10月",
                     incident: "太原市六大城区区长及相应社区主任考察智慧我家社区家庭服务中心"
                  },
                  {
                    month: "2015年11月",
                    incident: "智慧我家协办山西省第二届社区广场舞大赛"
                  },
                  {
                    month: "2015年11月",
                    incident: "智慧我家接受科技厅、建设厅领导的专家评审会，并得到一致好评与支持"
                  },
                  {
                    month: "2015年11月",
                    incident: "智慧我家总部乔迁至高新区万立科技大厦"
                  }
              ]
           },
           {
              year: '2016年',
              items: [
                {
                   month: "2016年01月15日",
                   incident: "智慧我家加入山西互联网协会，成为会员单位"
                },
                {
                   month:"2016年03月30日",
                   incident: "智慧我家项目路演发布会,在湖滨国际大酒店隆重召开"
                },
                {
                   month: "2016年05月11日",
                   incident: "智慧我家携手太原第九人民医院开创“活力养老 互联网+”新模式"
                },
                {
                   month: "2016年05月20日",
                   incident: "智慧我家“我爱您，关爱老人健康进社区”公益活动在漪汾苑社区圆满举行"
                },
                {
                   month: "2016年06月21日",
                   incident: "智慧我家成为太原市12349社区服务信息平台运营方"
                },
                {
                   month: "2016年07月27日",
                   incident: "智慧我家被山西省民政厅列为重点推广项目，今后智慧我家将在全市所有社区进行推广"
                },
                {
                   month: "2016年08月29日",
                   incident: "智慧我家APP正式上线及家事代理会员卡开售"
                },
                {
                   month: "2016年12月15日",
                   incident: "山西云尚天成网络科技有限责任公司（智慧我家项目）在靑创板挂牌成功！（股票代码：040118Q）"
                },
                {
                   month: "2016年12月23日",
                   incident: "太原市智慧社区发展中心“从心出发，让爱延续”志愿者培训第一期圆满举行"
                },
                {
                   month: "2016年12月27日",
                   incident: "2017年度智慧我家“戮力同心•极致绽放”跨年联欢会完美收官"
                }
              ]
           }
        ]
     }
  },
  components: {
    Banner
  }
}
</script>
<style lang="less" scoped>
.timeline {
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
        h1 {
           font-size: 32px;
           color: #99BB00;
           font-weight: 500;
           text-indent: 2em;
           padding: 15px 0;
         }
         p {
            text-indent: 140px;
            color: #333;
         }
         span {
            color: #999;
            margin-right: 50px;
         }
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
