import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const Permission: AppRouteRecordRaw = {
  path: '/permission',
  name: 'permission',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'permission.permission',
    requiresAuth: true,
    icon: 'icon-translate',
    order: 0,
  },
  children: [
    {
      path: '/permission/permission-manager',
      name: 'permission-manager',
      component: () => import('@/micro-app/permission-app.vue'),
      meta: {
        locale: 'permission.permission-manager',
        requiresAuth: false,
      },
    },
  ],
};

export default Permission;
