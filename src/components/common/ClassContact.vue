<template>
  <div class="classcontact">
    <div class="right">
          <!-- 文章分类 -->
          <div class="top">
              <h1 class="title"><i class="iconfont icon-wenjian-copy"></i>文章分类</h1>
              <div class="content">
                <ul>
                  <li v-for="item in articles">
                     <i class="iconfont icon-weibiaoti6"></i> <a href="#">{{item}}</a>
                  </li>
                </ul>
              </div>
          </div>
          <!-- 联系方式 -->
          <div class="bottom">
             <h1 class="title"><i class="iconfont icon-lianxifangshi"></i>联系方式</h1>
             <div class="content">
                <p>联系人：闫女士</p>
                <p>电　话：400-606-2349</p>
                <p>Email：yunshangtiancheng@zh5j.cn</p>
                <p>地　址：山西省太原高新开发区万立科技大厦12层</p>
             </div>
          </div>
    　</div>
  </div>
</template>
<script>
export default {
  name: "classcontact",
  data(){
     return {
        articles: [
          "文章分类",
          "公司动态",
          "产品中心",
          "关于我们",
          "社区活动",
          "政策信息",
          "惠民信息",
          "管家故事"
        ]
     }
  }
}
</script>
<style lang="less" scoped>
.right {
    width: 20%;
    height: 600px;
    float: right;
    li {
        height: 38px;
        line-height: 38px;
        border-bottom: 1px solid #ddd;
        text-indent: 2em;
        text-align: left;
        font-weight: bold;
        position: relative;
        font-weight: normal;
        &:hover {
           background: #f1f1f1;
        }
        i {color: #0E4599}
    }
   .top {
       top: 15px;
       left: -10px;
       .content {
           width: 99.5%;
       }
   }
   .bottom {
       margin-top: 10px;
       .content {
          height: 185px;
          width: 99.8%;
          box-sizing: border-box;
          padding: 10px 10px;
          p {
             color: #222;
             line-height: 30px;
             font-size: 12px;
          }
      }
   }
}
</style>
