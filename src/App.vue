<template>
  <div id="app">
     <!-- 头部组件 -->
     <HeadTop></HeadTop>
     <!-- logo及导航栏组件 -->
     <NavLogo></NavLogo>
     <!-- 路由显示组件 -->
     <router-view></router-view>
     <!-- 底部组件 -->
     <Foot></Foot>
  </div>
</template>

<script>
// 引入HeadTop组件
import HeadTop from './components/common/HeadTop'
// 引入Nav组件
import NavLogo from './components/common/Nav'
// 引入Footer组件
import Foot from './components/common/Foot'

export default {
  name: 'app',
  // 注册组件
  components: {
     HeadTop,
     NavLogo,
     Foot
  }
}
</script>

<style lang="less">
</style>
