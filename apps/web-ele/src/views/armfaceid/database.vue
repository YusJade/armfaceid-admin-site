<script setup lang="ts">
import type { FaceUser } from '@vben/types';

import { reactive } from 'vue';

import { useVbenVxeGrid, type VxeGridProps } from '#/adapter/vxe-table';
import { getFaceUserDataApi } from '#/api/core/data';

const gridOptions = reactive<VxeGridProps<FaceUser>>({
  border: true,
  stripe: true,
  loading: false,
  height: 400,
  columnConfig: {
    resizable: true,
  },
  rowConfig: {
    isHover: true,
  },
  checkboxConfig: {
    labelField: 'userID',
    highlight: true,
    range: true,
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'userID', title: 'ID', width: 70 },
    { field: 'userName', title: '用户名', width: 140 },
    { field: 'email', title: '邮箱', width: 220, sortable: true },
    // { field: 'profilePic' },
    // { field: 'faceImg' },
    // {
    //   field: 'sex',
    //   title: 'Sex',
    //   filters: sexOptions,
    //   filterMultiple: false,
    //   formatter({ cellValue }) {
    //     const item = sexOptions.find((item) => item.value === cellValue);
    //     return item ? item.label : '';
    //   },
    // },
    // {
    //   field: 'age',
    //   title: 'Age',
    //   filters: ageOptions,
    //   filterMethod({ value, row }) {
    //     return row.age >= value;
    //   },
    //   sortable: true,
    // },
    // { field: 'address', title: 'Address', showOverflow: true },
  ],
  // data: [
  //   {
  //     userID: -1,
  //     userName: 'test@test.com',
  //   },
  // ],
  toolbarConfig: {
    buttons: [
      { code: 'query', name: '点击查询（不重置条件）' },
      { code: 'reload', name: '点击刷新（重置条件）' },
    ],
    refresh: true,
  },
  proxyConfig: {
    ajax: {
      query: () => {
        return getFaceUserDataApi();
      },
    },
  },
});

// Grid 为表格组件
// gridApi 为表格的方法
const [Grid] = useVbenVxeGrid({
  gridOptions,
  formOptions: {},
  gridEvents: {},
  // 属性
  // 事件
});
</script>

<template>
  <Grid />
</template>
