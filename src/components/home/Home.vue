<template>
  <div class="home">
      <!-- 轮播图模块 -->
      <Banner :imgs="data.swipers"></Banner>

      <!-- 推荐服务模块 -->
      <div class="recommend">
           <h1 class="title"><i class="iconfont icon-xin"></i>推荐服务 <strong>全部服务</strong></h1>
           <div class="content">
               <div class="list" v-for="item in data.recommends">
                   <a href="#"><img :src="item.path"></a>
                   <p><a href="#">{{item.name}} <span>{{item.price}}</span></a></p>
               </div>
           </div>
      </div>

      <!-- 社区资讯和服务品种模块 -->
      <div class="infoServer">
         <div class="info">
             <h1 class="title"><i class="iconfont icon-liebiao"></i>社区资讯</h1>
             <div class="content">
                <ul>
                  <li v-for="item in data.infos"><a href="#">{{item}}</a></li>
                </ul>
             </div>
         </div>
         <div class="server">
             <h1 class="title"><i class="iconfont icon-fuwu"></i>服务品种</h1>
             <div class="content">
                 <ul>
                     <li v-for="item in data.servers"><a href="#"><img :src="item"></a></li>
                 </ul>
             </div>
         </div>
      </div>
      <!-- 企业大事模块 -->
      <div class="timeline">
         <div class="list">
            <div  v-for="item in data.list">
               <a href="#"><img :src="item"></a>
            </div>
         </div>
         <Banner :imgs="data.timelines"></Banner>
      </div>

      <!-- 友情链接模块 -->
      <div class="links">
          <h1 class="title"><i class="iconfont icon-lianjie"></i>友情链接</h1>
          <div class="content">
              <a href="#" v-for="item in data.links">{{item}}&nbsp;</a>
          </div>
      </div>
  </div>
</template>

<script>
// 引入Home中需要的数据
import data from '../../../home.json'
// 引入Banner组件
import Banner from './Banner'

export default {
   name: "home",
   data(){
      return {
         data: ""
      }
   },
   created() {
      this.data = data;
   },
   components: {
      Banner
   }
}
</script>

<style lang="less" scoped>
/* 推荐服务样式 */
.recommend {
   width: 100%;
   margin-top: 15px;
   .content {
      overflow: hidden;
      padding-top: 10px;
      width: 99.8%;
      .list {
         width: 24%;
         text-align: center;
         margin-right: 1.33%;
         float: left;
         font-size: 14px;
         &:last-child {
            margin-right: 0
         }
         img {
            width: 71.3%;
            max-width: 71.3%;
         }
         p {
            width: 100%;
            height: 60px;
            line-height: 60px;
            span {
               color: #EA6472;
               font-weight: bold;
            }
         }
         a {
             color: #0D3D88;
         }
      }
   }
}

/* 社区资讯和服务品种样式*/
.infoServer {
   width: 100%;
   margin-top: 22px;
   margin-bottom: 5px;
   overflow: hidden;
   .info {
       width: 31.65%;
       overflow: hidden;
       float: left;
       .content {
           width: 100%;
           padding-bottom: 19px;
           box-sizing: border-box;
           ul {
              width: 100%;
              padding-top: 6px;
              padding-left: 20px;
              padding-right: 20px;
              box-sizing: border-box;
           }
           li {
              height: 30px;
              line-height: 30px;
              white-space: nowrap;
              text-overflow:ellipsis;
              overflow: hidden;
           }
           a {
              color: #0D3D88;
              font-size: 13px;
           }
       }
   }
   .server {
       width: 67%;
       overflow: hidden;
       float: right;
       .content {
           width: 100%;
           overflow: hidden;
           box-sizing: border-box;
           ul {
              width: 100%;
              float: right;
              li {
                 float: left;
                 width: 20%;
                 height: 192px;
                 text-align: right;
                 line-height: 192px;
                 img {
                    vertical-align: middle;
                    max-width: 100%;
                 }
              }
           }
       }
   }
}

/* 企业大事样式 */
.timeline {
   width: 100%;
   margin-top: 15px;
   border: 1px solid #ddd;
   .list {
      width: 100%;
      overflow: hidden;
      div {
         margin-right: 1.05%;
         width: 24.2%;
         float: left;
         &:last-child {
            margin-right: 0
         }
         a {
             color: #0D3D88;
             img {
                max-width: 100%;
                width: 100%;
             }
         }
      }
    }

}


/* 友情链接样式 */
.links {
    margin: 15px 0;
   .content {
      width: 99.9%;
      height: 40px;
      font-size: 13px;
      line-height: 40px;
      a {
         color:#0D3D88;
         margin-left: 15px;
      }
   }
}
@media (max-width: 1200px){
   .links .content {
      height: auto;
      a {
        display: inline-block
      }
   }
}
</style>
