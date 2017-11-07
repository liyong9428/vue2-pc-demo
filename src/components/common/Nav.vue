<template>
  <div class="nav">
      <!-- logo部分 -->
      <div class="logo">
         <a href="#"><img src="https://ly809652226.github.io/imageserver/logo.png"></a>
      </div>
      <!-- 导航部分 -->
      <div class="navlist">
         <ul>
             <li style="background:#9FC911;border-radius:5px 0 0 5px">
                 <router-link to="/" class="yiji home">首页</router-link>
             </li>
             <li @click.prevent="toggle1">
                 <a href="#" class="yiji story bespeak">智慧管家<i class="top"></i></a>
                 <div class="select" v-show="show1">
                    <router-link to="/story" class="butler">管家故事</router-link>
                    <router-link to="/bespeak" class="butler">预约管家</router-link>
                 </div>
             </li>
             <li>
                 <a href="#"  class="yiji">社区服务</a>
             </li>
             <li @click.prevent="toggle2">
                 <a href="#"  class="yiji dynamic activity">社区资讯<i class="top"></i></a>
                 <div class="select" v-show="show2">
                    <router-link to="/dynamic" class="community">社区动态</router-link>
                    <router-link to="/activity" class="community">社区活动</router-link>
                 </div>
             </li>
             <li>
                 <router-link to="/cooperate"  class="yiji cooperate">商务合作</router-link>
             </li>
             <li :style="{borderRight:'none',borderRadius:'0 5px 5px 0'}" @click.prevent="toggle3">
                 <a href="#"  class="yiji synopsis timeline coverage recruit">关于我们<i class="top"></i></a>
                 <div class="select" v-show="show3">
                   <router-link to="/synopsis" class="aboutus" >公司简介</router-link>
                   <router-link to="/timeline" class="aboutus">发展历程</router-link>
                   <router-link to="/coverage" class="aboutus">媒体报道</router-link>
                   <router-link to="/recruit" class="aboutus">招贤纳士</router-link>
                 </div>
             </li>
         </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "nav",
  data(){
    return {
      show1: false,
      show2: false,
      show3: false
    }
  },
  mounted(){
    let that = this;
    let lis = document.querySelectorAll('.yiji');
    let flag = this.$route.path.substr(1)=='' ? 'home' : this.$route.path.substr(1) ;
    let initNode = document.querySelector('.'+flag);
    let aboutus = document.querySelectorAll('.aboutus');
    let community = document.querySelectorAll('.community');
    let butler = document.querySelectorAll('.butler');
    console.log(flag);
    for(var i=0;i<lis.length;i++){
       lis[i].style.background = '#767575';
       initNode.style.background = '#9FC911';
    }
    for(var i=0;i<community.length;i++){
        community[i].addEventListener('click',function(){
            for(var j=0;j<lis.length;j++){
                lis[j].style.background = '#767575';
                lis[3].style.background = '#9FC911';
            }
        })
        butler[i].addEventListener('click',function(){
            for(var j=0;j<lis.length;j++){
                lis[j].style.background = '#767575';
                lis[1].style.background = '#9FC911';
            }
        })
    }
    for(var i=0;i<aboutus.length;i++){
        aboutus[i].addEventListener('click',function(){
            for(var j=0;j<lis.length;j++){
                lis[j].style.background = '#767575';
                lis[5].style.background = '#9FC911';
            }
        })
    }
    lis[0].addEventListener('click',function(){
        for(var i=0;i<lis.length;i++){
            lis[i].style.background = '#767575';
        }
        this.style.background = '#9FC911';
        that.show1 = false;
        that.show2 = false;
        that.show3 = false;
    })
    lis[2].addEventListener('click',function(){
        for(var i=0;i<lis.length;i++){
            lis[i].style.background = '#767575';
        }
        this.style.background = '#9FC911';
        that.show1 = false;
        that.show2 = false;
        that.show3 = false;
    })
    lis[4].addEventListener('click',function(){
        for(var i=0;i<lis.length;i++){
            lis[i].style.background = '#767575';
        }
        this.style.background = '#9FC911';
        that.show1 = false;
        that.show2 = false;
        that.show3 = false;
    })
  },
  methods: {
    toggle1(){
      this.show1 = !this.show1;
      this.show2 = false;
      this.show3 = false;
    },
    toggle2(){
      this.show2 = !this.show2;
      this.show1 = false;
      this.show3 = false;
    },
    toggle3(){
      this.show3 = !this.show3;
      this.show2 = false;
      this.show1 = false;
    },
  }
}
</script>
<style lang="less" scoped>
.nav {
    width: 100%;
    height: 87px;
    overflow: hidden;
    color: #fff;
    .logo {
        width: 35%;
        overflow: hidden;
        float: left;
        text-align: left;
        img {
           width: 68.65%;
        }
    }
    .navlist {
        width: 64%;
        height: 87px;
        float: right;
        font-size: 14px;
        ul {
           width: auto;
           height: 64px;
           overflow: hidden;
           padding-top: 23px;
           float: right;
           border-radius: 5px;
           &:hover {border-radius: 5px;}
           li {
                background: #767575;
                float: left;
                text-align: center;
                &>a {
                  height: 40px;
                  display: inline-block;
                  line-height: 40px;
                  padding: 0 30px;
                  color: #fff;
                  border-right: 1px solid #fff;
                  font-weight: bold;
                  font-size: 15px;
                  &:hover {
                      background: #9FC911;
                  }
                  &>i:hover {
                      border-top-color: #fff;
                  }
              }
              .select {
                  position: absolute;
                  width: 160px;
                  overflow: hidden;
                  background: 767575;
                  border: 1px solid #ddd;
                  border-radius: 4px;
                  z-index: 9999;
                  a {
                     display: block;
                     width: 100%;
                     height: 43px;
                     background: #767575;
                     color: #fff;
                     font-size: 16px;
                     line-height: 43px;
                     text-align: left;
                     text-indent: 1em;
                  }
                  a:hover {
                      background: #9FC911;
                  }
              }
           }
        }
    }
}
@media (max-width: 1200px){
   .logo {
       width: 20%!important;
       height: 100%!important;
       box-sizing: border-box;
       padding-top: 15px;
       img {
          width: 100%!important;
       }
    }
   .navlist {width: 80%!important;}
}
</style>
