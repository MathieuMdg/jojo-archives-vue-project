export const categories = ['Personnage', 'Stand', 'Partie', 'Lieu', 'Objet']

export const emojis = ['🧢', '⭐', '🧛', '🕰️', '💈', '💎', '🐞', '🌀', '💣', '💥', '🏜️', '🏘️', '🏹', '🎭', '⚡', '🌹', '👊', '🔥']

const couleurs = {
  Personnage: '#ff2d87',
  Stand: '#22d3c5',
  Partie: '#ffc933',
  Lieu: '#8b7bff',
  Objet: '#ff8a3d'
}

export function couleurCategorie(categorie) {
  return couleurs[categorie] || '#b9a9d9'
}

export const articlesInitiaux = [
  {
    id: 1,
    titre: 'Jotaro Kujo',
    categorie: 'Personnage',
    emoji: '🧢',
    description: 'Lycéen japonais, héros de la partie 3. Il affronte DIO dans une bataille endiablé.',
    details:
      "Petit-fils de Joseph Joestar, Jotaro Kujo est le protagoniste de la partie 3 - Stardust Crusaders. Son Stand se manifeste quand il s'enferme volontairement en prison, persuadé d'être possédé. Il voyage ensuite jusqu'en Égypte avec ses alliés pour vaincre DIO et sauver sa mère. On le retrouve dans plusieurs autres parties, notamment Diamond is Unbreakable, et il est le père de Jolyne dans Stone Ocean."
  },
  {
    id: 2,
    titre: 'Star Platinum',
    categorie: 'Stand',
    emoji: '⭐',
    description: 'Le Stand de Jotaro : force, vitesse et précision extrêmes, et un cri de guerre resté célèbre.',
    details:
      "Star Platinum est un Stand de combat rapproché doté d'une puissance et d'une précision exceptionnelles. Sa vue est assez fine pour attraper une balle en plein vol. Il partage avec The World la capacité d'arrêter le temps, que Jotaro découvre lors de son duel final contre DIO. Son cri de combat : « ORA ORA ORA ! »."
  },
  {
    id: 3,
    titre: 'DIO',
    categorie: 'Personnage',
    emoji: '🧛',
    description: 'Vampire immortel et grand rival de la famille Joestar. Il domine la partie 3 avec The World.',
    details:
      "Dio Brando, adopté par George Joestar, devient le rival de Jonathan dans Phantom Blood. Grâce au masque de pierre, il se transforme en vampire. Un siècle plus tard, il revient dans Stardust Crusaders et menace toute la lignée Joestar depuis l'Égypte."
  },
  {
    id: 4,
    titre: 'The World',
    categorie: 'Stand',
    emoji: '🕰️',
    description: "Le Stand de DIO. Il permet d'arrêter le temps quelques secondes. « MUDA MUDA MUDA ! »",
    details:
      "Stand de force brute proche de Star Platinum, The World permet à DIO d'arrêter le temps. Ce pouvoir le rend quasi invincible jusqu'à ce que Jotaro apprenne à l'utiliser lui aussi. La réplique « ZA WARUDO » est devenue l'un des grands classiques de la saga."
  },
  {
    id: 5,
    titre: 'Josuke Higashikata',
    categorie: 'Personnage',
    emoji: '💈',
    description: 'Lycéen de Morioh et héros de la partie 4. Ne critiquez surtout pas sa coiffure.',
    details:
      "Josuke Higashikata est le fils illégitime de Joseph Joestar. Il vit à Morioh, où il protège ses amis et sa ville des utilisateurs de Stand malveillants. Il est extrêmement susceptible dès qu'on insulte sa coiffure. Son Stand, Crazy Diamond, répare les objets et soigne les blessures des autres."
  },
  {
    id: 6,
    titre: 'Crazy Diamond',
    categorie: 'Stand',
    emoji: '💎',
    description: "Le Stand de Josuke. Il répare tout ce qu'il touche, sauf son propre utilisateur.",
    details:
      "Crazy Diamond associe une grande force physique à un pouvoir de restauration : objets brisés et blessures des autres reviennent à leur état d'origine. En revanche, Josuke ne peut pas se soigner lui-même avec. Son cri de combat : « DORA DORA DORA ! »."
  },
  {
    id: 7,
    titre: 'Giorno Giovanna',
    categorie: 'Personnage',
    emoji: '🐞',
    description: 'Jeune héros de la partie 5. Il rêve de devenir Gang-Star pour nettoyer la mafia de l’intérieur.',
    details:
      "Giorno Giovanna est le fils de DIO, mais il ne partage pas sa cruauté. Il rejoint la mafia napolitaine Passione avec l'ambition de la réformer de l'intérieur. Son Stand, Gold Experience, donne la vie aux objets qu'il touche."
  },
  {
    id: 8,
    titre: 'Gold Experience Requiem',
    categorie: 'Stand',
    emoji: '🌀',
    description: 'Évolution de Gold Experience, capable de ramener toute action à zéro.',
    details:
      "Après avoir été transpercé par la flèche, Gold Experience évolue en Requiem. Ce Stand annule les actions et les intentions adverses en les « ramenant à zéro ». Il est souvent cité parmi les Stands les plus puissants de la saga."
  },
  {
    id: 9,
    titre: 'Yoshikage Kira',
    categorie: 'Personnage',
    emoji: '💣',
    description: 'Employé de bureau discret et tueur en série de Morioh, obsédé par sa tranquillité.',
    details:
      "Yoshikage Kira a 33 ans, une vie réglée comme du papier à musique et un penchant meurtrier qu'il cache soigneusement. Son Stand Killer Queen transforme ce qu'il touche en bombe, et Bites the Dust remonte le temps d'une heure pour effacer ses traces. Il est l'antagoniste principal de Diamond is Unbreakable."
  },
  {
    id: 10,
    titre: 'Killer Queen',
    categorie: 'Stand',
    emoji: '💥',
    description: "Le Stand de Kira : n'importe quel objet touché devient une bombe.",
    details:
      "Killer Queen dispose de trois atouts : transformer un objet touché en bombe, Sheer Heart Attack (une bombe autonome qui poursuit la chaleur) et Bites the Dust, qui remonte le temps d'environ une heure et piège ses ennemis dans une boucle."
  },
  {
    id: 11,
    titre: 'Stardust Crusaders',
    categorie: 'Partie',
    emoji: '🏜️',
    description: 'Troisième partie : Jotaro et ses alliés traversent le monde jusqu’en Égypte pour vaincre DIO.',
    details:
      "Stardust Crusaders introduit les Stands, ces esprits combattants inspirés notamment des cartes de tarot. Le groupe voyage d'étape en étape pour rejoindre DIO, en affrontant sur la route de nombreux utilisateurs de Stand envoyés contre eux. C'est souvent la partie qui fait entrer les lecteurs dans l'univers de JoJo."
  },
  {
    id: 12,
    titre: 'Morioh',
    categorie: 'Lieu',
    emoji: '🏘️',
    description: 'Ville fictive du Japon, décor de la partie 4. Derrière son calme, elle cache bien des dangers.',
    details:
      "C'est à Morioh que vivent Josuke, Koichi, Okuyasu et Kira. La ville est le théâtre de nombreuses affaires liées aux Stands, en partie à cause de la flèche qui y a créé plusieurs utilisateurs. Elle est le décor unique de Diamond is Unbreakable."
  },
  {
    id: 13,
    titre: 'Flèche de Stand',
    categorie: 'Objet',
    emoji: '🏹',
    description: 'Une flèche capable de réveiller un Stand chez celui qu’elle transperce, au risque de le tuer.',
    details:
      "Utilisée par plusieurs antagonistes de la saga, la flèche ne réveille un Stand que chez les personnes qui en ont le potentiel. Les autres n'y survivent pas. Elle joue un rôle central dans les parties 3, 4 et 5."
  },
  {
    id: 14,
    titre: 'Masque de pierre',
    categorie: 'Objet',
    emoji: '🎭',
    description: 'Un masque ancien qui transforme celui qui le porte en vampire dès qu’il touche du sang.',
    details:
      "C'est l'objet à l'origine de toute la saga. Dans Phantom Blood, Dio Brando l'utilise pour devenir vampire, ce qui déclenche l'affrontement avec Jonathan Joestar et lance la longue histoire des deux familles."
  },
  {
    id: 15,
    titre: 'Jonathan Joestar',
    categorie: 'Personnage',
    emoji: '⚡',
    description: 'Héros de Phantom Blood, gentleman britannique et premier JoJo, formé à la technique Hamon.',
    details:
      "Jonathan Joestar affronte Dio Brando, son frère adoptif devenu vampire. Pour le combattre, il apprend le Hamon, une technique de respiration qui produit une énergie proche de celle du soleil, efficace contre les vampires. Il est le premier d'une longue lignée de héros dont les prénoms ont les initiales J. J."
  }
]
