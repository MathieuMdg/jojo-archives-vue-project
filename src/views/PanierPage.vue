<script setup>
import Panier from '../components/Panier.vue'

defineOptions({ inheritAttrs: false })
defineProps({
  panier: { type: Array, default: () => [] }
})
const emit = defineEmits(['retirer-panier', 'vider-panier'])

</script>

<template>
  <h1>Panier</h1>
  <Panier :articles="panier" @retirer-panier="emit('retirer-panier', $event)" @vider-panier="emit('vider-panier')"/>
</template>
