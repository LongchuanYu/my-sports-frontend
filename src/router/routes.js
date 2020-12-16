
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/liyang/index.vue') },
      { path: 'liyang/', component: () => import('pages/liyang/index.vue') },
      { path: 'dxx/', component: () => import('pages/dxx/index.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
