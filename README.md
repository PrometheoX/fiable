💻 Fiable
==================

 Fiable es un smart contract para llevar a cabo licitaciones en blockchain. Cuenta con las siguientes funciones:
 
 1. Crear una licitación.
 2. Obtener una lista de las licitaciones creadas.
 3. Postular una cotización.
 4. Cambiar el estado de una licitación de abierta a cerrada.
 5. Eliminar una licitación.
 6. Eliminar una cotización.
 

👨‍💻 Instalación en local
===========

Para correr este proyecto en local debes seguir los siguientes pasos:


Paso 1: Pre - Requisitos
------------------------------

1. Asegúrese de haber instalado [Node.js] ≥ 12 ((recomendamos usar [nvm])
2. Asegúrese de haber instalado yarn: `npm install -g yarn`
3. Instalar dependencias: `yarn install`
4. Crear un test near account [NEAR test account]
5. Instalar el NEAR CLI globally: [near-cli] es una interfaz de linea de comando (CLI) para interacturar con NEAR blockchain

    yarn install --global near-cli

Step 2: Configura tu NEAR CLI
-------------------------------

Configura tu near-cli para autorizar su cuenta de prueba creada recientemente:

    near login
    
Step 3: Clonar Repositorio
-------------------------------    

Este comando nos permite clonar el repositorio del proyecto

```bash
git clone https://github.com/PrometheoX/fiable.git
```

Una vez que hayas descargado el repositorio, asegurate de ejecutar los comandos dentro del repositorio descargado. Puedes hacerlo con
```bash
cd fiable
```

Step 4: Realiza el BUILD para implementación de desarrollo de contrato inteligente 
------------------------------------------------------------------------------------

Instale el gestor de dependencia de Node.js dentro del repositorio

```bash
npm install
```

Cree el código de contrato inteligente e implemente el servidor de desarrollo local: 
```bash
yarn deploy
```


¡Felicitaciones, ahora tendrá un entorno de desarrollo local ejecutándose en NEAR TestNet!


✏️ Comando para CREAR una LICITACIÓN
-----------------------------------------------
Antes de ejecutar el comando brindado, modifica <your deployed contract> por el número de contrato generado. Por ejemplo: 'dev-1630622185346-59088620194720'. Además, modifica <username> por tu nombre de usuario en testnet. Por ejemplo: 'aval1'

Para Linux:
```bash
near call <your deployed contract> CrearLicitación '{"title":"string","razón_social":"string","descripción":"string","presupuesto_max":<number>,"anticipo":<number>,"fecha_cierre":"string"}' --account-id <username>.testnet
```

```
✏️ Comando que LISTA todas las LICITACIONES:
--------------------------------------------
Permite listar las licitaciones que existen en nuestro contrato inteligente. 

Para Linux:
```bash
near view <your deployed contract> MostrarLicitaciones --account-id <username>.testnet
```

✏️ Comando para CAMBIAR EL ESTADO de una LICITACIÓN
------------------------------------------------

Permite cambiar el estado de una licitación de "abierta" a "cerrada".

Para Linux:
```bash
near call <your deployed contract> CambiarEstado '{"id":1}' --account-id <username>.testnet
```

✏️ Comando para ELIMINAR una LICITACIÓN
--------------------------------------------

Para Linux:
```bash
near call <your deployed contract> BorrarLicitación '{"id":1}' --account-id <username>.testnet
``` 




🤖 Test 
==================

Las pruebas son parte del desarrollo, para ejecutar las pruebas en el contrato inteligente, debe ejecutar el siguiente comando:

    yarn test


Esto ejecutará los métodos de prueba en el `assembly/__tests__/example.spec.js` archivo


```bash
near call <your deployed contract> hello --account-id <username>.testnet
```


👩🏼‍🏫 Exploring and Explaining The Code 
====================================
This is a explanation of the smart contract file system

```bash
├── README.md                                       # this file
├── as-pect.config.js                               # configuration for as-pect (AssemblyScript unit testing)
├── asconfig.json                                   # configuration file for Assemblyscript compiler
├── assembly
│   ├── __tests__
│   │   ├── as-pect.d.ts                            # as-pect unit testing headers for type hints
│   │   └── main.spec.ts                            # unit test for the contract
│   ├── as_types.d.ts                               # AssemblyScript headers for type hint
│   ├── index.ts                                    # contains the smart contract code
│   ├── models.ts                                   # contains code for the models accesible to the smart contract
│   └── tsconfig.json                               # Typescript configuration file
├── neardev
│   ├── dev-account                                 #in this file the provisional deploy smart contract account is saved
│   └── dev-account.env                             #in this file the provisional deploy smart contract account is saved like a environment variable                             
├── out
│   └── main.wasm                                   # compiled smart contract code using to deploy
├── package-lock.json                               # project manifest lock version
├── package.json                                    # Node.js project manifest (scripts and dependencies)
└── yarn.lock                                       # project manifest lock version
```
1. El código de contrato inteligente vive en la carpeta `/assambly` folder.
2. Para realizar una implementación de prueba, use los scripts en el `/package.json` file.



==============================================

Aquí dejamos una propuesta de diseño [Ui] para desarrollar la parte frontend del proyecto comunitario. 


  [create-near-app]: https://github.com/near/create-near-app
  [Node.js]: https://nodejs.org/en/download/package-manager/
  [NEAR accounts]: https://docs.near.org/docs/concepts/account
  [NEAR Wallet]: https://wallet.testnet.near.org/
  [near-cli]: https://github.com/near/near-cli
  [NEAR test account]: https://docs.near.org/docs/develop/basics/create-account#creating-a-testnet-account
  [nvm]: https://github.com/nvm-sh/nvm
  [UX/UI]: https://drive.google.com/file/d/16U1ximx14-tZGFPKoo_sY0NfUVVrzYX8/view?usp=sharing
