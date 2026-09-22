<script setup>
import { ref, computed } from 'vue'
import BarreRecherche from '../components/BarreRecherche.vue'
import ListeArticles from '../components/ListeArticles.vue'
import { categories } from '../data/articles'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  articles: { type: Array, required: true },
  panier: { type: Array, default: () => [] }
})
const emit = defineEmits(['ajouter-panier'])

const recherche = ref('')
const categorieChoisie = ref('Toutes')

const articlesFiltres = computed(() => {
  const mot = recherche.value.trim()
  return props.articles.filter((a) => {
    const bonneCategorie = categorieChoisie.value === 'Toutes' || a.categorie === categorieChoisie.value
    const correspond = ('${a.titre} ${a.description} ${a.categorie}').includes(mot)
    return bonneCategorie && correspond
  })
})
</script>

<template>
  <h1>Articles</h1>

  <BarreRecherche v-model="recherche" />

  <div class="filtres" role="group" aria-label="Filtrer par catégorie">
    <button
      v-for="c in ['Toutes', ...categories]"
      :key="c"
      class="filtre"
      :class="{ actif: categorieChoisie === c }"
      @click="categorieChoisie = c"
    >
      {{ c }}
    </button>
  </div>

  <p class="compteur">{{ articlesFiltres.length }} résultat{{ articlesFiltres.length > 1 ? 's' : '' }}</p>

  <ListeArticles
    :articles="articlesFiltres"
    :panier="props.panier"
    :par-page="6"
    @ajouter-panier="emit('ajouter-panier', $event)"
  />
</template>
