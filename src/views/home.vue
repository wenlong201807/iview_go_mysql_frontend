<template>
  <div class="containerCla layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible v-model="collapsed" hide-trigger breakpoint="sm">
        <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon type="md-menu" :size="32" @click.native="handleCollapsed" :class="triggerClasses" />
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view />
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import { Layout } from 'iview' // 组件内使用
import SideMenu from '@/components/menu/side-menu.vue'
export default {
  name: 'home',
  data () {
    return {
      collapsed: true,
      menuList: [
        {
          title: '首页',
          name: 'menu1',
          icon: 'md-analytics',
          url: '/home'
        },
        {
          title: '列表页',
          name: 'menu2',
          icon: 'md-analytics',
          url: '/home/item'
        },
        {
          title: '添加列表页',
          name: 'menu2add',
          icon: 'md-analytics',
          url: '/home/itemAdd'
        },
        {
          title: '修改列表页',
          name: 'menu2amend',
          icon: 'md-analytics',
          url: '/home/itemAmend'
        },
        {
          title: '内容页',
          name: 'menu3',
          icon: 'md-analytics',
          url: '/home/content'
        },
        {
          title: '展示页',
          name: 'menu31',
          icon: 'md-appstore',
          children: [
            {
              title: '饼图',
              name: 'menu311',
              icon: 'md-apps',
              url: '/home/pie'
            },
            {
              title: '柱状图',
              name: 'menu312',
              icon: 'md-apps',
              url: '/home/bar'
            },
            {
              title: '待定',
              name: 'menu313',
              icon: 'md-apps',
              children: [
                {
                  title: '333-222-111',
                  name: 'menu321',
                  icon: 'ios-archive'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    triggerClasses () {
      return ['trigger-icon', this.collapsed ? 'rotate' : '']
    }
  },
  components: {
    SideMenu,
    Layout
  },
  methods: {
    handleCollapsed () {
      this.collapsed = !this.collapsed
      console.log('this.collapsed', this.collapsed)
    }
  }
}
</script>
<style lang="less" scoped>
.containerCla {
  height: 100vh;
  width: 100vw;
}

.layout-wrapper,
.layout-outer {
  height: 100%;
  .header-wrapper {
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 0 23px;
    .trigger-icon {
      cursor: pointer;
      transition: transform 0.3s ease;
      &.rotate {
        transform: rotateZ(-90deg);
        transition: transform 0.3s ease;
      }
    }
  }
  .content-con {
    padding: 10px;
    min-height: 800px;
    .page-card {
      min-height: ~'calc(100vh - 84px)';
    }
  }
}
</style>
