# FAQ
<br>

## Dans quel format sont les fichiers exportés ?

Les fichiers sont exportés au format CSV. Ils peuvent donc être facilement lisibles avec un tableur ou un éditeur de texte sur n'importe quel ordinateur.

<br>

## Comment retrouver mes fichiers exportés ?

Les fichiers exportés par l'application sont déposés dans le dossier `CineLog`, à la racine du stockage de votre téléphone.

*NB: un fichier est généré par type de données entrées dans l'application: un fichier pour les avis de films, un pour ceux des séries. Un fichier pour la liste de souhaits des films, un pour celle des séries.*

<br>

## Comment importer les fichiers que j'ai exporté ?

Deux conditions sont nécessaires à cela:

- que les fichiers se trouvent dans le dossier `CineLog`;
- qu'ils se nomment `import_movies.csv`, `import_series.csv`, `import_wishlist_movies.csv`, `import_wishlist_series.csv`.

<br>
<br>

## Comment mettre en place la sauvegarde automatique ?
<br>

### 1. Sauvegarder en local

<br>

**CineLog** permet d'effectuer automatiques. Couplé avec un système de synchronisation avec un cloud, cela permet de mettre à l'abri les exports effectués. Pour activer la sauvegarde, se rendre dans *Paramètres > Préférences générales*, et cocher *Sauvegarde automatique sur le téléphone*.
*NB: la sauvegarde est effectuée une fois par jour, au lancement de l'application. Si vous ne démarrez pas l'application, aucun export n'est effectué.*

### 2. Sauvegarder de manière distante avec une instance *NextCloud*

<br>

[**Nextcloud**](https://fr.wikipedia.org/wiki/Nextcloud) est un outil libre permettant d'héberger des fichiers à distance. Pour envoyer ses sauvegardes sur une instance NextCloud, il faut:

- installer le client NextCloud pour Android, [disponible]() sur le store f-droid;
- dans le client Nextcloud, se rendre dans le menu, puis dans *Envoi automatique*;
- dans la barre supérieure, cliquer sur l'icône burger, puis sur *Configurer un dossier personnalisé*;
- choisir *Dossier local*, puis choisir le dossier *CineLog*;
- choisir le *Dossier distant* de votre choix, et valider;
- That's it !
