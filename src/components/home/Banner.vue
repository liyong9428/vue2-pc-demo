<template>
  <div class="banner">
       <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in imgs"><img :src="item"></div>
          </div>
          <!-- Add Pagination -->
          <!-- <div class="swiper-pagination"></div> -->
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
      </div>
  </div>
</template>
<script>
const Swipe = require("../../../static/js/swiper.js")
export default {
   data(){
      return {}
   },
   props: {
      imgs: {
         type: Array,
         require: true
      }
   },
  mounted(){
        new Swipe('.swiper-container', {
            autoplay: 2500,
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            autoplayDisableOnInteraction: false,
            loop: true
        })
    }
}
</script>
<style lang="less" scoped>
   .banner {
       width: 100%;
       overflow: hidden;
       margin-top: 10px;
       position: relative;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        img {
            width: 100%;
            height: 100%
        }
    }
</style>
