<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { couleurCategorie } from '../data/articles'

defineOptions({ inheritAttrs: false })
const props = defineProps({
  articles: { type: Array, required: true },
  panier: { type: Array, default: () => [] }
})
const emit = defineEmits(['ajouter-panier'])

const route = useRoute()

const article = computed(() => props.articles.find((a) => a.id === Number(route.params.id)))
const dansPanier = computed(() => props.panier.some((a) => a.id === Number(route.params.id)))
</script>

<template>
  <RouterLink to="/articles" class="retour">← Retour aux articles</RouterLink>

  <article v-if="article" class="detail" :style="{ '--cat': couleurCategorie(article.categorie) }">
    <div class="detail-visuel" aria-hidden="true">{{ article.emoji }}</div>
    <div class="detail-texte">
      <span class="etiquette">{{ article.categorie }}</span>
      <h1>{{ article.titre }}</h1>
      <p class="chapeau">{{ article.description }}</p>
      <p>{{ article.details }}</p>
      <button class="bouton" :disabled="dansPanier" @click="emit('ajouter-panier', article)">
        {{ dansPanier ? 'Dans le panier' : 'Ajouter au panier' }}
      </button>
    </div>
  </article>

  <p v-else class="vide">
    Cet article n'existe pas ou a été supprimé.
    <RouterLink to="/articles">Voir tous les articles</RouterLink>
  </p>
</template>
