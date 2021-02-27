const shell = require('shelljs');

console.log('Olá mundo!');

const resultado = shell.exec('git diff --name-only branch-scripts-testes..main', { silent: true });

console.log(resultado.stdout.split('\n'));
