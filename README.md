# ProjetTPE-IOT-security-Blockchain

Ce projet est consacré à l"experimentation de la sécurité des applications Iot par la Blockchain.
Pour être plus spécifique, nous nous sommes limités à experimenter la sécurité avec les capteurs de temperature qui génèrent des informations, ces informations seront stockés dans la Blockcain et récuperé par la suite, question de voir si les informations ont été modifiées pendant leurs acheminements.

1. DATABASE
- Pour cette partie, nous avons utilisé une base des données Mysql qui nous aidera à stocker les informations qui provienent de nos différents capteurs, sous Ubuntu avec Xampp server, procedure de téléchargement et  d'installation sur https://www.apachefriends.org/fr/download.html
- Importer et executer script-database.sql

2. BACK-END LARAVEL
- Téléchargement et Installer de Laravel Framework en suivant la procedure suivante : https://laravel.com/docs/4.2
- Ouvrir la partie Laravel Back-end avec un editeur comme Vscode studio.
- Executer php artisan serve pour demarrer laravel sur le port 8000.
- POur check du demarrage :  http://127.0.0.1:8000

3. BLOCKCHAIN AVEC HYPERLEDGER FABRIC
- Procédure de Téléchargement et installation sur :  https://hyperledger.github.io/composer/latest/tutorials/tutorials.html
- Acceder au dossier temperature-Blockchain

- Installer le Business Network : composer network install --card PeerAdmin@hlfv1 --archiveFile temperature-blockchain@0.0.2.bna

- Demarrer le réseau : 
   composer network start --networkName temperature-blockchain --networkVersion 0.0.2 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

- importer la carte administrateur : composer card import --file networkadmin.card

- Test pour voir si la carte Réponds : composer network ping --card admin@temperature-blockchain

- Demarrage du composer : composer-rest-server -c admin@temperature-blockchain -n never -u true -w true

4. FRONT-END AVEC REACT JS
- Procedure de Téléchargement et d'installation : https://fr.reactjs.org/docs/getting-started.html
- acceder au dossier temperature-app
- Installer le npm
- npm init
- nmp install
- npm start pour demarrer la partie front-end
