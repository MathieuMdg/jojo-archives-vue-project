<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { auth, connecter } from '../auth'

defineOptions({ inheritAttrs: false })

const router = useRouter()
const route = useRoute()

const pseudo = ref('')
const motDePasse = ref('')
const erreur = ref('')

function seConnecter() {
  if (!pseudo.value.trim() || !motDePasse.value.trim()) {
    erreur.value = 'Renseignez un pseudo et un mot de passe.'
    return
  }
  connecter(pseudo.value.trim())
  router.push(route.query.redirect || '/admin')
}
</script>

<template>
  <h1>Connexion</h1>

  <p v-if="route.query.redirect && !auth.connecte" class="message message-erreur">
    Connectez-vous pour accéder à la page d'administration.
  </p>

  <p v-if="auth.connecte" class="message message-ok">
    Vous êtes connecté en tant que {{ auth.pseudo }}. 
    <RouterLink to="/admin">Aller à l'administration</RouterLink>
  </p>

  <form v-else class="formulaire" @submit.prevent="seConnecter" novalidate>
    <p v-if="erreur" class="message message-erreur" role="alert">{{ erreur }}</p>
    <label>
      Pseudo
      <input v-model="pseudo" type="text" autocomplete="username" />
    </label>
    <label>
      Mot de passe
      <input v-model="motDePasse" type="password" autocomplete="current-password" />
    </label>
    <button type="submit" class="bouton">Se connecter</button>
  </form>
</template>
