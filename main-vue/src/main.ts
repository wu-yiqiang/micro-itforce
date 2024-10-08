import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import globalComponents from '@/components';
import microApp from '@micro-zoe/micro-app';
import router from './router';
import store from './store';
import i18n from './locale';
import directive from './directive';
import './mock';
import App from './App.vue';
// Styles are imported via arco-plugin. See config/plugin/arcoStyleImport.ts in the directory for details
// 样式通过 arco-plugin 插件导入。详见目录文件 config/plugin/arcoStyleImport.ts
// https://arco.design/docs/designlab/use-theme-package
import '@/assets/style/global.less';
import '@/api/interceptor';

microApp.start({ 
  // 关闭虚拟路由
  'disable-memory-router': true,
  // 预加载
  preFetchApps: [
    {
      name: 'permission-manager',
      url: 'http://localhost:3393/permission-manager',
      level: 3,
      iframe: true
    }
  ],
  // 设置子应用生周期
  lifeCycles: {
    created() {},
    beforemount() {},
    mounted() {},
    unmount() {},
    error() {},
  }

});
const app = createApp(App);

app.use(ArcoVue, {});
app.use(ArcoVueIcon);

app.use(router);
app.use(store);
app.use(i18n);
app.use(globalComponents);
app.use(directive);

app.mount('#app');
