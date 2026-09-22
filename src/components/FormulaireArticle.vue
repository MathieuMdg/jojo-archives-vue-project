<script setup>
import { reactive, ref } from 'vue'
import { categories, emojis } from '../data/articles'

const emit = defineEmits(['ajouter-article'])

const formulaire = reactive({
  titre: '',
  categorie: categories[0],
  emoji: emojis[0],
  description: '',
  details: ''
})
const erreurs = ref([])
const dernierAjout = ref('')

function valider() {
  const liste = []
  if (formulaire.titre.trim().length < 2) liste.push('Le titre doit contenir au moins 2 caractères.')
  if (formulaire.description.trim().length < 10)
    liste.push('La description courte doit contenir au moins 10 caractères.')
  return liste
}

function envoyer() {
  erreurs.value = valider()
  if (erreurs.value.length) return

  emit('ajouter-article', {
    titre: formulaire.titre.trim(),
    categorie: formulaire.categorie,
    emoji: formulaire.emoji,
    description: formulaire.description.trim(),
    details: formulaire.details.trim() || formulaire.description.trim()
  })

  dernierAjout.value = formulaire.titre.trim()

  formulaire.titre = ''
  formulaire.description = ''
  formulaire.details = ''
}
</script>

<template>
  <form class="formulaire" @submit.prevent="envoyer" novalidate>
    <p v-if="dernierAjout" class="message message-ok" role="status">
      L'article « {{ dernierAjout }} » a été ajouté.
      <RouterLink to="/articles">Voir la liste des articles</RouterLink>
    </p>

    <ul v-if="erreurs.length" class="message message-erreur" role="alert">
      <li v-for="erreur in erreurs" :key="erreur">{{ erreur }}</li>
    </ul>

    <label>
      Titre
      <input v-model="formulaire.titre" type="text" placeholder="Ex : Jolyne Cujoh" />
    </label>

    <div class="deux-colonnes">
      <label>
        Catégorie
        <select v-model="formulaire.categorie">
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
      </label>

      <label>
        Emoji
        <select v-model="formulaire.emoji">
          <option v-for="e in emojis" :key="e" :value="e">{{ e }}</option>
        </select>
      </label>
    </div>

    <label>
      Description courte
      <input v-model="formulaire.description" type="text" placeholder="Une phrase pour la carte" />
    </label>

    <label>
      Détails
      <textarea
        v-model="formulaire.details"
        rows="5"
        placeholder="Le texte complet affiché sur la page de l'article (facultatif)"
      ></textarea>
    </label>

    <button type="submit" class="bouton">Ajouter l'article</button>
  </form>
</template>
