<script setup>
import { couleurCategorie } from '../data/articles'

const props = defineProps({
  article: { type: Object, required: true },
  dansPanier: { type: Boolean, default: false }
})
const emit = defineEmits(['ajouter-panier'])
</script>

<template>
  <article class="carte" :style="{ '--cat': couleurCategorie(article.categorie) }">
    <div class="carte-visuel" aria-hidden="true">{{ article.emoji }}</div>

    <div class="carte-corps">
      <span class="etiquette">{{ article.categorie }}</span>
      <h3>{{ article.titre }}</h3>
      <p>{{ article.description }}</p>
    </div>

    <div class="carte-actions">
      <RouterLink :to="{ name: 'article', params: { id: article.id } }" class="bouton bouton-clair">
        Lire la fiche
      </RouterLink>
      <button class="bouton" :disabled="dansPanier" @click="emit('ajouter-panier', article)">
        {{ dansPanier ? 'Dans le panier' : 'Ajouter au panier' }}
      </button>
    </div>
  </article>
</template>
