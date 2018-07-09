const {Container} = require('./index.js')();

console.log( Container );

const domNode = document.querySelector('#main');

const container = new Container( domNode );
