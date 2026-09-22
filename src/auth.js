import { reactive } from 'vue'

export const auth = reactive({
  connecte: false,
  pseudo: ''
})

export function connecter(pseudo) {
  auth.connecte = true
  auth.pseudo = pseudo
}

export function deconnecter() {
  auth.connecte = false
  auth.pseudo = ''
}
