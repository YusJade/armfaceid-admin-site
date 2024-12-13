import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:layout-dashboard',
      order: -1,
      title: 'ArmFaceID',
    },
    name: 'ArmFaceID',
    path: '/armfaceid',
    children: [
      {
        name: 'Database',
        path: '/database',
        component: () => import('#/views/armfaceid/database.vue'),
        meta: {
          affixTab: true,
          icon: 'lucide:area-chart',
          title: '数据库',
        },
      },
      {
        name: 'Workspace',
        path: '/workspace',
        component: () => import('#/views/dashboard/workspace/index.vue'),
        meta: {
          icon: 'carbon:workspace',
          title: $t('page.dashboard.workspace'),
        },
      },
    ],
  },
];

export default routes;
