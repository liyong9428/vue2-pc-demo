import Vue from 'vue'
import Router from 'vue-router'
// 引入首页面组件
import Home from '@/components/Home/Home'
// 引入公司简介组件
import Synopsis from '@/components/aboutus/Synopsis'
// 引入发展历程组件
import Timeline from '@/components/aboutus/Timeline'
// 引入媒体报道组件
import Coverage from '@/components/aboutus/Coverage'
// 引入招聘组件
import Recruit from '@/components/aboutus/Recruit'
// 引入预约管家组件
import Bespeak from '@/components/butler/Bespeak'
// 引入管家故事组件
import Story from '@/components/butler/Story'
// 引入社区动态组件
import Dynamic from '@/components/community/Dynamic'
// 引入社区活动组件
import Activity from '@/components/community/Activity'
// 引入商务合作组件
import Cooperate from '@/components/cooperate/Cooperate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/synopsis',
      component: Synopsis
    },
    {
      path: '/timeline',
      component: Timeline
    },
    {
      path: '/bespeak',
      component: Bespeak
    },
    {
      path: '/story',
      component: Story
    },
    {
      path: '/coverage',
      component: Coverage
    },
    {
      path: '/recruit',
      component: Recruit
    },
    {
      path: '/dynamic',
      component: Dynamic
    },
    {
      path: '/activity',
      component: Activity
    },
    {
      path: '/cooperate',
      component: Cooperate
    }
  ]
})
