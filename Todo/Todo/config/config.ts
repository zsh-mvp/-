import { defineConfig } from 'umi';

export const config = defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      name: '主页',
      icon: 'HomeOutlined',
    },
  ],
  fastRefresh: {},
  antd: {
    compact: true,
  },
});
