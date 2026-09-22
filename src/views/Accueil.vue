<script setup>
import ArticleItem from '../components/ArticleItem.vue'

defineOptions({ inheritAttrs: false })
const props = defineProps({
  articles: { type: Array, required: true },
  panier: { type: Array, default: () => [] }
})
const emit = defineEmits(['ajouter-panier'])

</script>

<template>
  <section class="hero">
    <span class="hero-bruit" aria-hidden="true">ゴゴゴゴゴゴ</span>
    <h1>Archives Joestar</h1>
    <p>
      Personnages, Stands, lieux et objets de l'univers de JoJo's Bizarre Adventure
    </p>
    <div class="hero-actions">
      <RouterLink to="/articles" class="bouton">Explorer les articles</RouterLink>
      <RouterLink to="/ajouter" class="bouton bouton-clair">Ajouter une fiche</RouterLink>
    </div>
  </section>

  <section>
    <h2>À la une</h2>
    <div class="grille">
      <ArticleItem
        v-for="article in props.articles.slice(0, 3)" :key="article.id" :article="article" :dans-panier="props.panier.some((a) => a.id === article.id)" @ajouter-panier="emit('ajouter-panier', $event)"/>
    </div>
  </section>
</template>
