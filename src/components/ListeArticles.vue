<script setup>
import { ref, computed, watch } from 'vue'
import ArticleItem from './ArticleItem.vue'

const props = defineProps({
  articles: { type: Array, required: true },
  panier: { type: Array, default: () => [] },
  parPage: { type: Number, default: 6 }
})
const emit = defineEmits(['ajouter-panier'])

const page = ref(1)

const nombrePages = computed(() => Math.max(1, Math.ceil(props.articles.length / props.parPage)))

// Articles de la page courante
const articlesDeLaPage = computed(() => {
  const debut = (page.value - 1) * props.parPage
  return props.articles.slice(debut, debut + props.parPage)
})


watch(
  () => props.articles,
  () => {
    page.value = 1
  }
)

function estDansPanier(article) {
  return props.panier.some((a) => a.id === article.id)
}
</script>

<template>
  <p v-if="articles.length === 0" class="vide">
    Aucun article ne correspond à cette recherche.
  </p>

  <template v-else>
    <div class="grille">
      <ArticleItem
        v-for="article in articlesDeLaPage"
        :key="article.id"
        :article="article"
        :dans-panier="estDansPanier(article)"
        @ajouter-panier="emit('ajouter-panier', $event)"
      />
    </div>

    <nav v-if="nombrePages > 1" class="pagination" aria-label="Pagination">
      <button class="bouton bouton-clair" :disabled="page === 1" @click="page--">Précédent</button>
      <span>Page {{ page }} sur {{ nombrePages }}</span>
      <button class="bouton bouton-clair" :disabled="page === nombrePages" @click="page++">
        Suivant
      </button>
    </nav>
  </template>
</template>
