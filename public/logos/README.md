# Logos des serveurs

Place ici les logos des serveurs référencés dans la section "Références".

## Convention de nommage

Utilise le nom en minuscules, sans accents/espaces :

- `fishmc.png`
- `demeryamc.png`
- `onysky.png`
- `socturna.png`

## Formats recommandés

- **PNG transparent** ou **SVG** (préféré pour la netteté)
- Hauteur source ≈ 200–400px (le rendu est cappé à `max-h-16` ≈ 64px à l'écran)
- Logos pensés pour fond sombre (la section est en dark mode `#0a0a0a`)

## Activer un logo

Dans `src/components/Projects.jsx`, remplis le champ `logo` :

```jsx
const references = [
  { name: "FishMC",    logo: "/logos/fishmc.png" },
  { name: "DemeryaMC", logo: "/logos/demeryamc.png" },
  { name: "OnySky",    logo: "/logos/onysky.png" },
  { name: "Socturna",  logo: "/logos/socturna.png" },
];
```

Le rendu bascule automatiquement du texte stylé vers l'image.
Laisse `logo: null` pour garder le rendu texte.
