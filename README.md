# Répertoire des organisations maritimes algériennes

Application Next.js présentant une sélection vérifiée d'entreprises et d'institutions algériennes actives dans les secteurs portuaire, maritime, offshore et halieutique.

## Démarrage local

```bash
npm install
npm run dev
```

L'application est servie sur `http://localhost:3000`.

## Scripts disponibles

- `npm run dev` – serveur de développement
- `npm run build` – compilation production
- `npm start` – serveur de production
- `npm run lint` – vérification linting

## Sources des données

Les fiches sont construites à partir d'informations publiques : communiqués institutionnels, sites officiels et presse économique. La liste n'est pas exhaustive et ne remplace pas le registre national du commerce (CNRC).

## Déploiement

Un workflow manuel permet un déploiement sur Vercel :

```bash
npm run build
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-2f887d79
```

Après le déploiement, vérifier la mise en ligne via `curl https://agentic-2f887d79.vercel.app`.
