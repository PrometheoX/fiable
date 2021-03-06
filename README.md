馃捇 Fiable
==================

 Fiable es un smart contract para llevar a cabo licitaciones en blockchain. Cuenta con las siguientes funciones:
 
 1. Crear una licitaci贸n.
 2. Obtener una lista de las licitaciones creadas.
 3. Postular una cotizaci贸n.
 4. Cambiar el estado de una licitaci贸n de abierta a cerrada.
 5. Eliminar una licitaci贸n.
 6. Eliminar una cotizaci贸n.
 

馃懆鈥嶐煉? Instalaci贸n en local
===========

Para correr este proyecto en local debes seguir los siguientes pasos:


Paso 1: Pre - Requisitos
------------------------------

1. Aseg煤rese de haber instalado [Node.js] 鈮? 12 ((recomendamos usar [nvm])
2. Aseg煤rese de haber instalado yarn: `npm install -g yarn`
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

Step 4: Realiza el BUILD para implementaci贸n de desarrollo de contrato inteligente 
------------------------------------------------------------------------------------

Instale el gestor de dependencia de Node.js dentro del repositorio

```bash
npm install
```

Cree el c贸digo de contrato inteligente e implemente el servidor de desarrollo local: 
```bash
yarn deploy
```


隆Felicitaciones, ahora tendr谩 un entorno de desarrollo local ejecut谩ndose en NEAR TestNet!


鉁忥笍 Comando para CREAR una LICITACI脫N
-----------------------------------------------
Antes de ejecutar el comando brindado, modifica <your deployed contract> por el n煤mero de contrato generado. Por ejemplo: 'dev-1630622185346-59088620194720'. Adem谩s, modifica <username> por tu nombre de usuario en testnet. Por ejemplo: 'aval1'

Para Linux:
```bash
near call <your deployed contract> CrearLicitaci贸n '{"t铆tulo":"string","raz贸n_social":"string","descripci贸n":"string","presupuesto_max":<number>,"anticipo":<number>,"fecha_cierre":"string"}' --account-id <username>.testnet
```

鉁忥笍 Comando que LISTA todas las LICITACIONES:
--------------------------------------------
Permite listar las licitaciones que existen en nuestro contrato inteligente. 

Para Linux:
```bash
near view <your deployed contract> MostrarLicitaciones --account-id <username>.testnet
```

鉁忥笍 Comando para CAMBIAR EL ESTADO de una LICITACI脫N
------------------------------------------------

Permite cambiar el estado de una licitaci贸n de "abierta" a "cerrada".

Para Linux:
```bash
near call <your deployed contract> CambiarEstado '{"id":1}' --account-id <username>.testnet
```

鉁忥笍 Comando para ELIMINAR una LICITACI脫N
--------------------------------------------

Para Linux:
```bash
near call <your deployed contract> BorrarLicitaci贸n '{"id":1}' --account-id <username>.testnet
``` 

鉁忥笍 Comando para POSTULAR una COTIZACI脫N
-----------------------------------------------
Permite postular una cotizaci贸n a una licitaci贸n especificando el id de esta.

Para Linux:
```bash
near call <your deployed contract> PostularCotizaci贸n '{"raz贸n_social":"string","licitaci贸n_destino":<id de la licitaci贸n>,"precio_ofertado":<number>,"anticipo":<number>}' --account-id <username>.testnet
```

鉁忥笍 Comando que LISTA todas las COTIZACIONES:
--------------------------------------------
Esta funci贸n se encuentra actualmente bajo desarrollo.

 


馃 Test 
==================

Las pruebas son parte del desarrollo, para ejecutar las pruebas en el contrato inteligente, debe ejecutar el siguiente comando:

    yarn test


Esto ejecutar谩 los m茅todos de prueba en el `assembly/__tests__/example.spec.js` archivo




馃懇馃徏鈥嶐煆? Exploring and Explaining The Code 
====================================
This is a explanation of the smart contract file system

```bash
鈹溾攢鈹? README.md                                       # this file
鈹溾攢鈹? as-pect.config.js                               # configuration for as-pect (AssemblyScript unit testing)
鈹溾攢鈹? asconfig.json                                   # configuration file for Assemblyscript compiler
鈹溾攢鈹? assembly
鈹?   鈹溾攢鈹? __tests__
鈹?   鈹?   鈹溾攢鈹? as-pect.d.ts                            # as-pect unit testing headers for type hints
鈹?   鈹?   鈹斺攢鈹? main.spec.ts                            # unit test for the contract
鈹?   鈹溾攢鈹? as_types.d.ts                               # AssemblyScript headers for type hint
鈹?   鈹溾攢鈹? index.ts                                    # contains the smart contract code
鈹?   鈹溾攢鈹? models.ts                                   # contains code for the models accesible to the smart contract
鈹?   鈹斺攢鈹? tsconfig.json                               # Typescript configuration file
鈹溾攢鈹? neardev
鈹?   鈹溾攢鈹? dev-account                                 #in this file the provisional deploy smart contract account is saved
鈹?   鈹斺攢鈹? dev-account.env                             #in this file the provisional deploy smart contract account is saved like a environment variable                             
鈹溾攢鈹? out
鈹?   鈹斺攢鈹? main.wasm                                   # compiled smart contract code using to deploy
鈹溾攢鈹? package-lock.json                               # project manifest lock version
鈹溾攢鈹? package.json                                    # Node.js project manifest (scripts and dependencies)
鈹斺攢鈹? yarn.lock                                       # project manifest lock version
```
1. El c贸digo de contrato inteligente vive en la carpeta `/assambly` folder.
2. Para realizar una implementaci贸n de prueba, use los scripts en el `/package.json` file.



==============================================

[Propuesta de dise帽o]  Este mockup es una presentaci贸n con las diferentes pantallas de la app, para avanzar puede utilizar las flechas del teclado, hacer click en el slide o esperar 5 segundos a que avance autom谩ticamente.


  [create-near-app]: https://github.com/near/create-near-app
  [Node.js]: https://nodejs.org/en/download/package-manager/
  [NEAR accounts]: https://docs.near.org/docs/concepts/account
  [NEAR Wallet]: https://wallet.testnet.near.org/
  [near-cli]: https://github.com/near/near-cli
  [NEAR test account]: https://docs.near.org/docs/develop/basics/create-account#creating-a-testnet-account
  [nvm]: https://github.com/nvm-sh/nvm
  [Propuesta de dise帽o]: https://docs.google.com/presentation/d/e/2PACX-1vQo6i_5OxctyPXELi8aB6vI_PuFWW2hVWgI8M-b0ueAlzV01v1vJUXhcnLFWMFyVFWAjeGJWtWfxpDX/pub?start=true&loop=false&delayms=5000

