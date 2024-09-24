Password store est un outil de gestion des mots de passe utilisant le chiffrement à l'aide des clés GPG. Il peut être utilisé en local mais aussi synchronisé avec un dépôt git distant.

La note ci-dessous montre comment mettre en place un environnement password-store avec:
- un serveur git où sont stockés les mots de passe;
- un client sur lequel sont utilisés les mots de passe.

&nbsp;
## Mise en place d'un serveur git

&nbsp;
### Installation de git
```
sudo apt install git
```

&nbsp;
### Création de l'utilisateur git
```
sudo mkdir /opt/git
sudo adduser git
sudo chown git:git /opt/git

su git
cd
mkdir .ssh && chmod 700 .ssh
touch .ssh/authorized_keys && chmod 600 .ssh/authorized_keys
```

&nbsp;
### Configuration SSH

Ajout de la clé publique (le début de ligne empêche de se connecter pour faire autre chose que du git. Remplacer XXXX par la clé SSH):
```
echo 'no-port-forwarding,no-X11-forwarding,no-agent-forwarding,no-pty XXXXX' > .ssh/authorized_keys
```

&nbsp;
### Configuration de password store 

Création du projet de stockage des mots de passe:
```
cd /opt/git
mkdir passstore.git
cd passstore.git
git init --bare
```

&nbsp;
### Configuration du shell pour l'utilisateur git

Ajout du git-shell, en utilisateur classique:
```
cat /etc/shells
which git-shell
sudo vim /etc/shells # et ajout du résultat du which git-shell

sudo chsh git -s $(which git-shell)
```

Test qu'on ne peut pas se connecter:
```
ssh git@ulica.fr # doit logguer puis quitter
```

&nbsp;
### *Sources*
 - https://git-scm.com/book/fr/v2/Git-sur-le-serveur-Mise-en-place-du-serveur
 - https://www.sheevaboite.fr/articles/installer-serveur-git-auto-heberge-partie-1/

&nbsp;
## Ajout des fichiers au repo git

voir: https://git.zx2c4.com/password-store/about/#EXTENDED%20GIT%20EXAMPLE

Sur la machine cliente:

- mettre en place une clé GPG (en local. Penser à la déposer quelque part):
```
gpg2 --full-gen-key
```
- créer le fichier de mots de passe:
```
pass init pierre@ulicae.com
```
- mettre en place le lien avec le repo git:
```
pass git config user.email "pierre@ulicae.com"
pass git config user.name "Pierre Rognon"
pass git init
pass git remote add origin git@ulica.fr:passstore
pass git fetch
pass git reset --hard origin/master
```
- test du lien (si plusieurs repo git, bien configurer `.ssh/config`, voir https://www.devdungeon.com/content/how-specify-ssh-key-git-repository):
```
pass insert perso/ldlc
pass git push -u --all
```

&nbsp;
## Utilisation de plusieurs repos git

Il suffit de changer les variables d'enrivonnement utilisées par pass. Pour cela:
1. créer un dossier .password-store
2. y poser un script pour chaque repo git, contenant: 
`export PASSWORD_STORE_GIT=~/.password-store/perso && export PASSWORD_STORE_DIR=~/.password-store/perso && pass "$@"`
3. ajouter au .bashrc le dossier au PATH:
`export PATH="/home/alcidauk/.password-store/:$PATH"`
4. créer les sous dossiers du password-store voulus 
5. suivre la procédure plus haut en changeant la commande pass par le nom du script (par exemple: `pass-work`)
