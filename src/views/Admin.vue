<script setup>
import { ref } from 'vue'

defineOptions({ inheritAttrs: false })
defineProps({
  articles: { type: Array, required: true }
})
const emit = defineEmits(['supprimer-article'])

const message = ref('')

function supprimer(article) {

  const ok = window.confirm(`Supprimer « ${article.titre} » ? Cette action est définitive.`)
  if (!ok) return
  emit('supprimer-article', article.id)
  message.value = `« ${article.titre} » a été supprimé.`
}
</script>

<template>
  <h1>Administration</h1>
  <p class="intro">{{ articles.length }} article{{ articles.length > 1 ? 's' : '' }} dans les archives.</p>

  <p v-if="message" class="message message-ok" role="status">{{ message }}</p>

  <p v-if="articles.length === 0" class="vide">
    Il n'y a plus aucun article. <RouterLink to="/ajouter">Ajouter un article</RouterLink>
  </p>

  <div v-else class="tableau-conteneur">
    <table class="tableau">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Titre</th>
          <th scope="col">Catégorie</th>
          <th scope="col"><span class="sr-only">Actions</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.id }}</td>
          <td>
            <RouterLink :to="{ name: 'article', params: { id: article.id } }">
              {{ article.emoji }} {{ article.titre }}
            </RouterLink>
          </td>
          <td>{{ article.categorie }}</td>
          <td class="cellule-action">
            <button class="bouton bouton-danger" @click="supprimer(article)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
