import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../auth'

import AccueilView from '../views/Accueil.vue'
import ArticlesView from '../views/Articles.vue'
import ArticleDetailView from '../views/ArticleDetail.vue'
import AjouterView from '../views/Ajouter.vue'
import PanierPageView from '../views/PanierPage.vue'
import LoginView from '../views/Login.vue'
import AdminView from '../views/Admin.vue'

const routes = [
  { path: '/', name: 'accueil', component: AccueilView },
  { path: '/articles', name: 'articles', component: ArticlesView },
  { path: '/article/:id', name: 'article', component: ArticleDetailView },
  { path: '/ajouter', name: 'ajouter', component: AjouterView },
  { path: '/panier', name: 'panier', component: PanierPageView },
  { path: '/login', name: 'login', component: LoginView },

  { path: '/admin', name: 'admin', component: AdminView, meta: { requiresAuth: true } },

  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !auth.connecte) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

export default router
