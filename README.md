Le repository est décomposé en 2 parties : backend et frontend.

D'abord, cloner l'ensemble de ce repository en local.

Pré-requis :
- Node 20, npm

## Dossier backend

Installation et Exécution en local :
- Aller dans le fichier `backend` et installer les dépendances :
```bash
cd backend
npm install
```
- Créer un fichier `.env` à la racine de `backend` avec l'exemple `.env.example`.  
Strapi devrait configurer automatiquement les valeurs des variables au premier lancement de l'application.  
Vous pouvez utiliser SQLite.
- Démarrer le serveur de développement en local avec :
```bash
npm run develop
```
- La page de création de compte admin devrait s'ouvrir automatiquement dans votre navigateur (sinon: http://localhost:1337/admin). Créer un compte utilisateur local.
- Ensuite, stopper le serveur local, et importer les données de test :
```bash
npm run strapi import -- -f ./data/products_data_demo.tar.gz.enc --key products
```
- Relancez le serveur, les produits devraient apparaitre dans le back-office.

## Dossier frontend

Installation et Exécution en local :
- Aller dans le fichier `frontend` et installer les dépendances :
```bash
cd frontend
npm install
```
- Créer un fichier `.env.development` à la racine de `frontend` avec l'exemple `.env.example`.  
Vous pouvez mettre une valeur aléatoire de test pour `NEXT_PUBLIC_ANALYTICS_ID`.  
- Démarrer le serveur de développement Next.js en local avec :
```bash
npm run dev
```
- Vous pouvez vous rendre sur http://localhost:3000 pour tester l'application.
