<script setup>
defineProps({
  modelValue: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="recherche">
    <label for="recherche" class="sr-only">Rechercher un article</label>
    <input
      id="recherche"
      type="search"
      placeholder="Rechercher un Stand, un personnage, un lieu…"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
