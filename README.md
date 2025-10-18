# 🚀 React GitHub Pages App

Une application React moderne et responsive, prête à être hébergée sur GitHub Pages.

## ✨ Fonctionnalités

- **Interface moderne** avec design gradient et animations fluides
- **Responsive design** adapté à tous les écrans
- **Compteur interactif** pour démontrer la réactivité React
- **Navigation fluide** avec header fixe
- **Déploiement automatique** sur GitHub Pages
- **Architecture modulaire** avec composants réutilisables

## 🛠️ Technologies utilisées

- React 18
- CSS3 avec animations
- GitHub Pages
- GitHub Actions (CI/CD)

## 📦 Installation et développement local

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/votre-username/react-github-pages-app.git

# Aller dans le dossier
cd react-github-pages-app

# Installer les dépendances
npm install

# Lancer en mode développement
npm start
```

L'application sera accessible sur `http://localhost:3000`

## 🚀 Déploiement sur GitHub Pages

### Méthode 1: Déploiement automatique avec GitHub Actions (Recommandé)

1. **Créer un repository sur GitHub**
2. **Pousser le code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/votre-username/react-github-pages-app.git
   git push -u origin main
   ```

3. **Activer GitHub Pages**:
   - Aller dans Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`

4. **Le déploiement se fait automatiquement** à chaque push sur `main`

### Méthode 2: Déploiement manuel

```bash
# Installer gh-pages si pas déjà fait
npm install --save-dev gh-pages

# Déployer
npm run deploy
```

## ⚙️ Configuration

### Modifier l'URL de déploiement

Dans `package.json`, modifiez la ligne `homepage`:
```json
"homepage": "https://votre-username.github.io/nom-de-votre-repo"
```

### Personnalisation

- **Couleurs**: Modifiez les gradients dans les fichiers CSS
- **Contenu**: Éditez les composants dans `src/components/`
- **Titre**: Changez le titre dans `public/index.html`

## 📁 Structure du projet

```
react-github-pages-app/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Hero.js & Hero.css
│   │   ├── Features.js & Features.css
│   │   └── Footer.js & Footer.css
│   ├── App.js & App.css
│   ├── index.js
│   └── index.css
├── .github/workflows/
│   └── deploy.yml
├── package.json
└── README.md
```

## 🎨 Personnalisation du design

### Couleurs principales
- Gradient principal: `#667eea` → `#764ba2`
- Couleur de fond: Gradient personnalisé
- Texte: Blanc sur fond coloré, gris foncé sur fond blanc

### Responsive breakpoints
- Mobile: < 768px
- Desktop: ≥ 768px

## 🔧 Scripts disponibles

- `npm start`: Lance le serveur de développement
- `npm run build`: Crée la version de production
- `npm test`: Lance les tests
- `npm run deploy`: Déploie sur GitHub Pages (méthode manuelle)

## 📝 Notes importantes

1. **Homepage URL**: Assurez-vous que l'URL dans `package.json` correspond à votre repository
2. **Branch principale**: Le workflow GitHub Actions se déclenche sur la branch `main`
3. **Permissions**: GitHub Actions a besoin des permissions pour déployer (automatiquement configuré)

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Si vous rencontrez des problèmes:
1. Vérifiez que Node.js est installé
2. Assurez-vous que l'URL homepage est correcte
3. Vérifiez que GitHub Pages est activé dans les settings
4. Consultez les logs GitHub Actions en cas d'erreur de déploiement

---

**Créé avec ❤️ et React** 🚀
