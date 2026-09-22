<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { articlesInitiaux } from './data/articles'
import { auth, deconnecter } from './auth'

const router = useRouter()

const articles = ref([...articlesInitiaux])
const panier = ref([])

function ajouterArticle(nouvelArticle) {
  const nouvelId = articles.value.length ? Math.max(...articles.value.map((a) => a.id)) + 1 : 1
  articles.value.push({ id: nouvelId, ...nouvelArticle })
}

function supprimerArticle(id) {
  articles.value = articles.value.filter((a) => a.id !== id)
  panier.value = panier.value.filter((a) => a.id !== id)
}

function ajouterAuPanier(article) {
  const dejaLa = panier.value.some((a) => a.id === article.id)
  if (!dejaLa) panier.value.push(article)
}

function retirerDuPanier(id) {
  panier.value = panier.value.filter((a) => a.id !== id)
}

function viderPanier() {
  panier.value = []
}

function seDeconnecter() {
  deconnecter()
  router.push('/')
}
</script>

<template>
  <header class="entete">
    <RouterLink to="/" class="logo">Archives Joestar</RouterLink>

    <nav class="nav" aria-label="Navigation principale">
      <RouterLink to="/" exact-active-class="actif">Accueil</RouterLink>
      <RouterLink to="/articles" exact-active-class="actif">Articles</RouterLink>
      <RouterLink to="/ajouter" exact-active-class="actif">Ajouter</RouterLink>
      <RouterLink to="/panier" exact-active-class="actif">
        Panier
        <span v-if="panier.length" class="pastille">{{ panier.length }}</span>
      </RouterLink>
      <RouterLink to="/admin" exact-active-class="actif">Admin</RouterLink>

      <button v-if="auth.connecte" class="lien-bouton" @click="seDeconnecter">
        Se déconnecter ({{ auth.pseudo }})
      </button>
      <RouterLink v-else to="/login" exact-active-class="actif">Connexion</RouterLink>
    </nav>
  </header>

  <main class="page">
    <RouterView v-slot="{ Component }">
      <component :is="Component" :articles="articles" :panier="panier" @ajouter-article="ajouterArticle" @supprimer-article="supprimerArticle" @ajouter-panier="ajouterAuPanier" @retirer-panier="retirerDuPanier" @vider-panier="viderPanier"/>
    </RouterView>
  </main>

  <footer class="pied">
    Projet Vue.js · Archives Joestar
  </footer>
</template>
