<script setup>
import FormulaireArticle from '../components/FormulaireArticle.vue'

defineOptions({ inheritAttrs: false })
const emit = defineEmits(['ajouter-article'])
</script>

<template>
  <h1>Ajouter un article</h1>
  <p class="intro">Complétez les "archives" avec un personnage, un Stand, un lieu ou un objet de la saga.</p>
  <FormulaireArticle @ajouter-article="emit('ajouter-article', $event)" />
</template>
