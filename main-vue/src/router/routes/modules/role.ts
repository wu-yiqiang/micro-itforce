import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const Role: AppRouteRecordRaw = {
  path: '/role',
  name: 'role',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'role.role',
    requiresAuth: true,
    icon: 'icon-translate',
    order: 0,
  },
  children: [
    {
      path: '/role/role-manager',
      name: 'role-manager',
      component: () => import('@/micro-app/role-app.vue'),
      meta: {
        locale: 'role.role-manager',
        requiresAuth: false,
      },
    },
  ],
};

export default Role;
