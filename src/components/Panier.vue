<script setup>
import { couleurCategorie } from '../data/articles'

defineProps({
  articles: { type: Array, required: true }
})
const emit = defineEmits(['retirer-panier', 'vider-panier'])
</script>

<template>
  <div v-if="articles.length === 0" class="vide">
    Votre panier est vide.
    <RouterLink to="/articles">Parcourir les articles</RouterLink>
  </div>

  <div v-else>
    <ul class="liste-panier">
      <li
        v-for="article in articles"
        :key="article.id"
        :style="{ '--cat': couleurCategorie(article.categorie) }"
      >
        <span class="panier-emoji" aria-hidden="true">{{ article.emoji }}</span>
        <div class="panier-texte">
          <RouterLink :to="{ name: 'article', params: { id: article.id } }">
            {{ article.titre }}
          </RouterLink>
          <small>{{ article.categorie }}</small>
        </div>
        <button class="bouton bouton-clair" @click="emit('retirer-panier', article.id)">Retirer</button>
      </li>
    </ul>

    <div class="panier-bas">
      <strong>{{ articles.length }} article{{ articles.length > 1 ? 's' : '' }}</strong>
      <button class="bouton bouton-danger" @click="emit('vider-panier')">Vider le panier</button>
    </div>
  </div>
</template>
