
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'loginuser', component: () => import('pages/Login.vue') },
      { path: 'Register', component: () => import('pages/Register.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'loginadmin', component: () => import('pages/admin/Loginadmin.vue') },
      { path: 'LihatUser', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/admin/adminLAyout.vue'),
    children: [
      { path: 'Indexadmin', component: () => import('pages/admin/Indexadmin.vue') },
      { path: 'DaftarMokas', name: 'DaftarMokas', component: () => import('pages/admin/daftarmokas.vue') },
      { path: 'DaftarVespa', name: 'DaftarVespa', component: () => import('pages/admin/daftarvespa.vue') },
      { path: 'DaftarHurley', name: 'DaftarHurley', component: () => import('pages/admin/daftarhurley.vue') },
      { path: 'formedit', name: 'formedit', component: () => import('pages/admin/formedit.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MainLAyout.vue'),
    children: [
      { path: 'home', name: 'home', component: () => import('pages/Index.vue') },
      { path: 'Moge', name: 'Moge', component: () => import('pages/Moge.vue') },
      { path: 'MotorCustom', name: 'Motor Custom', component: () => import('pages/Motorcustom.vue') },
      { path: 'VespaKlasik', name: 'Vespa Klasik', component: () => import('pages/vespaklasik.vue') }
    ]
  }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
