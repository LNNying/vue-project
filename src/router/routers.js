import Main from '@/components/main'
import parentView from '@/components/parent-view'
// import Main from 'iview-admin-plus/src/components/main'
/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  // {
  //   path: '',
  //   name: 'doc',
  //   meta: {
  //     title: '文档',
  //     href: 'https://lison16.github.io/iview-admin-doc/#/',
  //     icon: 'ios-book'
  //   }
  // },
  // {
  //   path: '/join',
  //   name: 'join',
  //   component: Main,
  //   // 始终可见
  //   // showAlways: true,
  //   // auth: ['W_POD', 'W_POD_INFO', 'W_POD_INIT'],
  //   meta: {
  //     hideInBread: true
  //   },
  //   children: [
  //     {
  //       path: 'join_page',
  //       name: 'join_page',
  //       meta: {
  //         title: 'QQ群'
  //         // auth: 'W_POD_INIT'
  //       },
  //       component: () => import('@/view/join-page.vue')
  //     }
  //   ]
  // },
  {
    path: '/konva-map',
    name: 'konva-map',
    component: Main,
    meta: {
      title: 'Konva地图',
    },
    children: [
      {
        path: 'map1',
        name: 'map1',
        meta: {
          title: '地图1'
        },
        component: () => import('@/view/konva/map1.vue')
      },
      {
        path: 'map2',
        name: 'map2',
        meta: {
          title: '地图2'
        },
        component: () => import('@/view/konva/map2.vue')
      },
      {
        path: 'map3',
        name: 'map3',
        meta: {
          title: '地图3'
        },
        component: () => import('@/view/konva/map3.vue')
      },
      {
        path: 'map4',
        name: 'map4',
        meta: {
          title: '地图4'
        },
        component: () => import('@/view/konva/map4.vue')
      },
      {
        path: 'map5',
        name: 'map5',
        meta: {
          title: '地图5'
        },
        component: () => import('@/view/konva/map5.vue')
      },
      {
        path: 'map6',
        name: 'map6',
        meta: {
          title: '地图6'
        },
        component: () => import('@/view/konva/map6.vue')
      },
      {
        path: 'map7',
        name: 'map7',
        meta: {
          title: '地图7'
        },
        component: () => import('@/view/konva/map7.vue')
      },
      {
        path: 'map8',
        name: 'map8',
        meta: {
          title: '地图8'
        },
        component: () => import('@/view/konva/map8.vue')
      },
      {
        path: 'map9',
        name: 'map9',
        meta: {
          title: '地图9'
        },
        component: () => import('@/view/konva/map9.vue')
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    component: Main,
    title: '消息中心',
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'logo-buffer',
      title: '组件'
    },
    component: Main,
    children: [
      {
        path: 'tree_select_page',
        name: 'tree_select_page',
        meta: {
          title: '树状下拉选择器'
        },
        component: () => import('@/view/components/tree-select/index.vue')
      },
      {
        path: 'test-component',
        name: '测试父子组件通信',
        meta: {
          title: '测试父子组件通信'
        },
        component: () => import('@/view/test-component/test-component.vue')
      },
      {
        path: 'count_to_page',
        name: 'count_to_page',
        meta: {
          title: '数字渐变'
        },
        component: () => import('@/view/components/count-to/count-to.vue')
      },
      {
        path: 'drag_list_page',
        name: 'drag_list_page',
        meta: {
          title: '拖拽列表'
        },
        component: () => import('@/view/components/drag-list/drag-list.vue')
      },
      {
        path: 'drag_drawer_page',
        name: 'drag_drawer_page',
        meta: {
          title: '可拖拽抽屉'
        },
        component: () => import('@/view/components/drag-drawer')
      },
      {
        path: 'org_tree_page',
        name: 'org_tree_page',
        meta: {
          title: '组织结构树'
        },
        component: () => import('@/view/components/org-tree')
      },
      {
        path: 'tree_table_page',
        name: 'tree_table_page',
        meta: {
          title: '树状表格'
        },
        component: () => import('@/view/components/tree-table/index.vue')
      },
      {
        path: 'cropper_page',
        name: 'cropper_page',
        meta: {
          title: '图片裁剪'
        },
        component: () => import('@/view/components/cropper/cropper.vue')
      },
      {
        path: 'tables_page',
        name: 'tables_page',
        meta: {
          title: '多功能表格'
        },
        component: () => import('@/view/components/tables/tables.vue')
      },
      {
        path: 'split_pane_page',
        name: 'split_pane_page',
        meta: {
          title: '分割窗口'
        },
        component: () => import('@/view/components/split-pane/split-pane.vue')
      },
      {
        path: 'markdown_page',
        name: 'markdown_page',
        meta: {
          title: 'Markdown编辑器'
        },
        component: () => import('@/view/components/markdown/markdown.vue')
      },
      {
        path: 'editor_page',
        name: 'editor_page',
        meta: {
          title: '富文本编辑器'
        },
        component: () => import('@/view/components/editor/editor.vue')
      },
      {
        path: 'icons_page',
        name: 'icons_page',
        meta: {
          title: '自定义图标'
        },
        component: () => import('@/view/components/icons/icons.vue')
      }
    ]
  },
  {
    path: '/update',
    name: 'update',
    meta: {
      icon: 'md-cloud-upload',
      title: '数据上传'
    },
    component: Main,
    children: [
      {
        path: 'update_table_page',
        name: 'update_table_page',
        meta: {
          icon: 'ios-document',
          title: '上传Csv'
        },
        component: () => import('@/view/update/update-table.vue')
      },
      {
        path: 'update_paste_page',
        name: 'update_paste_page',
        meta: {
          icon: 'md-clipboard',
          title: '粘贴表格数据'
        },
        component: () => import('@/view/update/update-paste.vue')
      }
    ]
  },
  {
    path: '/excel',
    name: 'excel',
    meta: {
      icon: 'ios-stats',
      title: 'EXCEL导入导出'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: '导入EXCEL'
        },
        component: () => import('@/view/excel/upload-excel.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: '导出EXCEL'
        },
        component: () => import('@/view/excel/export-excel.vue')
      }
    ]
  },
  {
    path: '/tools_methods',
    name: 'tools_methods',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'tools_methods_page',
        name: 'tools_methods_page',
        meta: {
          icon: 'ios-hammer',
          title: '工具方法',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/tools-methods/tools-methods.vue')
      }
    ]
  },
  {
    path: '/JSX-com',
    name: 'JSX',
    meta: {
      hideInBread: true,
      title: 'JSX'
    },
    component: Main,
    children: [
      {
        path: 'jsx',
        name: '函数式组件',
        meta: {
          icon: 'md-planet',
          title: '函数式组件'
        },
        component: () => import('@/view/jsx/fun-com.vue')
      },
      {
        path: 'ele-table',
        name: 'TableTest',
        meta: {
          icon: 'md-planet',
          title: 'TableTest'
        },
        component: () => import('@/view/jsx/table.vue')
      },
      {
        path: 'iview-table',
        name: 'IviewTableTest',
        meta: {
          icon: 'md-planet',
          title: 'IviewTableTest'
        },
        component: () => import('@/view/jsx/iview-table.vue')
      }
    ]
  },
  {
    path: '/my',
    name: '自己组件',
    meta: {
      hideInBread: true,
      title: '自己组件'
    },
    component: Main,
    children: [
      {
        path: 'select',
        name: '下拉选择1',
        meta: {
          icon: 'md-planet',
          title: '自己组件'
        },
        component: () => import('@/view/my-component/select-my.vue')
      },
      {
        path: 'select2',
        name: '下拉选择2',
        meta: {
          icon: 'md-planet',
          title: '自己组件'
        },
        component: () => import('@/view/my-component/select-table.vue')
      },
      {
        path: 'select3',
        name: '下拉选择3',
        meta: {
          icon: 'md-planet',
          title: '自己组件'
        },
        component: () => import('@/view/my-component/select-my-tree-select.vue')
      },
      {
        path: 'select4',
        name: '下拉选择4',
        meta: {
          icon: 'md-planet',
          title: '自己组件'
        },
        component: () => import('@/view/my-component/select-com.vue')
      },
      {
        path: 'china',
        name: '中国地图',
        meta: {
          icon: 'md-planet',
          title: '自己组件'
        },
        component: () => import('@/view/map/china.vue')
      },
      {
        path: 'china-map',
        name: '中国地图-自定义标注',
        meta: {
          icon: 'md-planet',
          title: '自己组件'
        },
        component: () => import('@/view/map/china-tag.vue')
      },
      {
        path: 'Vue-EasyTable',
        name: 'Vue-EasyTable',
        meta: {
          icon: 'md-planet',
          title: 'Vue-EasyTable'
        },
        component: () => import('@/view/table/Vue-EasyTable.vue')
      },
      {
        path: 'vue-table-com',
        name: '插件Vue-Table',
        meta: {
          icon: 'md-planet',
          title: '自定义Select'
        },
        component: () => import('@/view/table/vue-table-com.vue')
      },
      {
        path: 'custom',
        name: '自定义列',
        meta: {
          icon: 'md-planet',
          title: 'custom'
        },
        component: () => import('@/view/table/custom-table.vue')
      },
      {
        path: 'custom-select',
        name: '自定义Select',
        meta: {
          icon: 'md-planet',
          title: '自定义Select'
        },
        component: () => import('@/view/table/custom-select.vue')
      },
      {
        path: 'vue-select',
        name: '插件Vue-Select',
        meta: {
          icon: 'md-planet',
          title: '自定义Select'
        },
        component: () => import('@/view/table/vue-select-com.vue')
      }
    ]
  },
  {
    path: '/i18n',
    name: 'i18n',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'i18n_page',
        name: 'i18n_page',
        meta: {
          icon: 'md-planet',
          title: 'i18n - {{ i18n_page }}'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      }
    ]
  },
  {
    path: '/error_store',
    name: 'error_store',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'error_store_page',
        name: 'error_store_page',
        meta: {
          icon: 'ios-bug',
          title: '错误收集'
        },
        component: () => import('@/view/error-store/error-store.vue')
      }
    ]
  },
  {
    path: '/error_logger',
    name: 'error_logger',
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'error_logger_page',
        name: 'error_logger_page',
        meta: {
          icon: 'ios-bug',
          title: '错误收集'
        },
        component: () => import('@/view/single-page/error-logger.vue')
      }
    ]
  },
  {
    path: '/directive',
    name: 'directive',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'directive_page',
        name: 'directive_page',
        meta: {
          icon: 'ios-navigate',
          title: '指令'
        },
        component: () => import('@/view/directive/directive.vue')
      }
    ]
  },
  {
    path: '/IE',
    name: 'ie兼容',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'Ie',
        name: 'IE兼容',
        meta: {
          icon: 'ios-navigate',
          title: '指令'
        },
        component: () => import('@/view/IE/ie.vue')
      }
    ]
  },
  {
    path: '/json',
    name: 'Json编辑器',
    meta: {
      hideInBread: true,
      title: 'Json编辑器',
      icon: 'ios-navigate',
      showAlways: true,
    },
    component: Main,
    children: [
      {
        path: 'jsonEdit',
        name: 'Json编辑器',
        meta: {
          icon: 'ios-navigate',
          title: 'Json编辑器'
        },
        component: () => import('@/view/json/jsonEdit.vue')
      },
      {
        path: 'vueJson',
        name: 'vue-json-editor',
        meta: {
          icon: 'ios-navigate',
          title: 'vue-json-editor'
        },
        component: () => import('@/view/json/vue-json.vue')
      },
      {
        path: 'vue-tree',
        name: 'vue-tree',
        meta: {
          icon: 'ios-navigate',
          title: 'vue-tree'
        },
        component: () => import('@/view/json/vue-tree.vue')
      },
      {
        path: '3D',
        name: '3D',
        meta: {
          icon: 'ios-navigate',
          title: '3D'
        },
        component: () => import('@/view/json/3D.vue')
      }
    ]
  },
  {
    path: '/test',
    name: '图形化',
    meta: {
      title: '图形化',
      hideInBread: true,
      icon: 'ios-navigate',
      showAlways: true,
    },
    component: Main,
    children: [
      {
        path: 'test',
        name: 'Vue Konva',
        meta: {
          icon: 'ios-navigate',
          title: 'Vue Konva'
        },
        component: () => import('@/view/test/testMap.vue')
      },
      {
        path: 'test2',
        name: 'Vue Konva2',
        meta: {
          icon: 'ios-navigate',
          title: 'Vue Konva'
        },
        component: () => import('@/view/test/testMap2.vue')
      }
    ]
  },
  {
    path: '/echart',
    name: 'echart',
    meta: {
      title: '图形化',
      hideInBread: true,
      icon: 'ios-navigate',
      showAlways: true,
    },
    component: Main,
    children: [
      {
        path: 'echartMap',
        name: 'echartMap',
        meta: {
          icon: 'ios-navigate',
          title: 'echartMap'
        },
        component: () => import('@/view/echart/echartMap.vue')
      }
    ]
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'md-menu',
      title: '多级菜单'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          access: ['super_admin'],
          icon: 'md-funnel',
          showAlways: true,
          title: '二级-2'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: 'level_2_2_1',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: 'level_2_2_2',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'md-funnel',
          title: '二级-3'
        },
        component: () => import('@/view/multilevel/level-2-3.vue')
      }
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
