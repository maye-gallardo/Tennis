Para configurar lo necesario
 npm --init   (crea el package.json con dependencias)
desde: https://mochajs.org/#installation
 npm install --global mocha  //global
 npm install --save-dev mocha  //o como dependencia del proyecto
 npm install mocha
 mkdir test
desde: http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/
para usar babel como transpiler de JS6 a JS5 con mocha
especialmente para que funcionen las clases import y export
  npm install babel-core --save-dev
  npm install --save-dev babel-core babel-preset-env
  
  # For ES6/ES2015 support
  npm install babel-preset-es2015 --save-dev

  # If you want to use JSX
  npm install babel-preset-react --save-dev

  # If you *must* use experimental ES7 features
  npm install babel-preset-stage-0 --save-dev

  We’ll need to configure Babel with a .babelrc file in the project’s root directory:
  crear archivo: .babelrc
  {
    "presets": ["es2015"]
  }

  Para ejecutar las pruebas
  mocha --compilers js:babel-core/register

  Para que npm test reconozca y use babel,
  anadir esto en package.json:
  "scripts": {
    "test": "npm run && mocha --compilers js:babel-core/register"
  },

  es decir, eso reemplaza el por defecto:
  "scripts": {
    "test": "mocha"
  },


Para que JSHInt no indique el warning de sintaxis solo
reconocida por JS6 en Atom
Crear el archivo .jshintrc con:
{
  "esversion": 6
}

Para instalar chai expect
En el test:
var expect = require('chai').expect;
var should = require('chai').should();
En linea de comandos:
npm install chai


Para ejecutar el archivo fizzbuzz por consola con node:

$> node -r babel-register fizzbuzz.js

