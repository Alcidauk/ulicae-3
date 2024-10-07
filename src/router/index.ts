/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import Cv from '@/components/cv/Cv.vue'
import Home from '@/components/Home.vue'
import Note from '@/components/Note.vue'
import PortfolioCaroussel from '@/components/Portfolio-caroussel.vue'
import Portfolio from '@/components/Portfolio.vue'

import { createRouter, createWebHistory } from 'vue-router/auto'


const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/cv', component: Cv },
  { path: '/notes', component: Note },
  {
    path: '/portfolio',
    component: Portfolio,
    children: [
      { path: ':name', component: PortfolioCaroussel }
    ]
  },
  /*{
    path: '/cinelog',
    component: Cinelog,
    children: [
      { path: ':part', component: CinelogPart },
    ]
  },*/
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
