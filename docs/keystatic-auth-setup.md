# Configuration de l'Authentification Keystatic pour la Production

## Vue d'ensemble

En production, Keystatic utilise l'authentification GitHub pour sécuriser l'accès à l'interface administrateur. Seuls les utilisateurs autorisés pourront modifier le contenu du site.

## Prérequis

- Un compte GitHub
- Accès au repository `Bened45/blockchain-benin`
- Accès aux paramètres de déploiement (Vercel, Netlify, etc.)

## Étape 1 : Créer une GitHub OAuth App

1. **Allez sur GitHub** : https://github.com/settings/developers
2. **Cliquez sur "OAuth Apps"** puis **"New OAuth App"**
3. **Remplissez le formulaire** :
   - **Application name** : `Blockchain Benin CMS`
   - **Homepage URL** : `https://www.beninblockchain.com`
   - **Authorization callback URL** : `https://www.beninblockchain.com/api/keystatic/github/oauth/callback`
   
   > ⚠️ **Important** : Remplacez `www.beninblockchain.com` par votre vrai domaine de production

4. **Cliquez sur "Register application"**

## Étape 2 : Obtenir les Credentials

Après la création de l'OAuth App :

1. **Copiez le "Client ID"** - vous en aurez besoin
2. **Générez un "Client Secret"** :
   - Cliquez sur "Generate a new client secret"
   - **⚠️ IMPORTANT** : Copiez-le immédiatement, vous ne pourrez plus le voir après !

## Étape 3 : Configurer les Variables d'Environnement

### En local (pour tester)

Créez un fichier `.env.local` à la racine du projet :

```bash
NEXT_PUBLIC_KEYSTATIC_GITHUB_CLIENT_ID=votre_client_id
KEYSTATIC_GITHUB_CLIENT_SECRET=votre_client_secret
```

### En production (Vercel/Netlify)

Ajoutez ces variables d'environnement dans votre plateforme de déploiement :

#### Sur Vercel :
1. Allez dans **Settings** → **Environment Variables**
2. Ajoutez :
   - `NEXT_PUBLIC_KEYSTATIC_GITHUB_CLIENT_ID` = votre Client ID
   - `KEYSTATIC_GITHUB_CLIENT_SECRET` = votre Client Secret

#### Sur Netlify :
1. Allez dans **Site settings** → **Environment variables**
2. Ajoutez les mêmes variables

## Étape 4 : Déployer

1. **Commitez vos changements** :
   ```bash
   git add .
   git commit -m "Configure Keystatic GitHub authentication"
   git push
   ```

2. **Redéployez** votre application

## Étape 5 : Tester l'Authentification

1. Allez sur `https://votre-domaine.com/keystatic`
2. Vous devriez voir un bouton **"Sign in with GitHub"**
3. Cliquez dessus et autorisez l'application
4. Vous serez redirigé vers l'interface Keystatic

## Gestion des Accès

### Qui peut accéder ?

Par défaut, **seuls les collaborateurs du repository GitHub** peuvent accéder à l'interface admin.

### Ajouter un administrateur

1. Allez sur le repository : https://github.com/Bened45/blockchain-benin
2. Cliquez sur **Settings** → **Collaborators**
3. Cliquez sur **Add people**
4. Entrez le nom d'utilisateur GitHub de la personne
5. Sélectionnez le niveau d'accès (recommandé : **Write** ou **Maintain**)

### Retirer un administrateur

1. Allez dans **Settings** → **Collaborators**
2. Cliquez sur le bouton **Remove** à côté de l'utilisateur

## Fonctionnement

### En développement (local)
- Mode `local` : pas d'authentification requise
- Les modifications sont sauvegardées dans `/content`

### En production
- Mode `github` : authentification GitHub requise
- Les modifications créent des commits automatiques dans le repository
- Chaque modification est tracée avec l'auteur GitHub

## Sécurité

### ✅ Bonnes pratiques

- **Ne jamais commiter** le fichier `.env.local`
- **Utiliser des secrets** pour les Client Secrets
- **Limiter les collaborateurs** au strict nécessaire
- **Activer 2FA** sur les comptes GitHub des administrateurs

### ⚠️ Important

- Le `Client Secret` doit rester **CONFIDENTIEL**
- Ne le partagez jamais publiquement
- Si compromis, régénérez-le immédiatement sur GitHub

## Dépannage

### "Failed to authenticate"
- Vérifiez que les variables d'environnement sont correctement configurées
- Vérifiez l'URL de callback dans l'OAuth App

### "Access denied"
- Vérifiez que l'utilisateur est collaborateur du repository
- Vérifiez que le repository owner/name est correct dans `keystatic.config.tsx`

### Les modifications ne s'enregistrent pas
- Vérifiez que l'utilisateur a les permissions d'écriture sur le repository
- Vérifiez les logs de la console pour les erreurs

## Support

Pour toute question ou problème :
- Documentation Keystatic : https://keystatic.com/docs/github-mode
- Issues GitHub : https://github.com/Bened45/blockchain-benin/issues
