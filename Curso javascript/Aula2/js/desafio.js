/* Tipos de operadores de igualdade

Apenas um sinal de (=) significa que é para atribuição0, por exemplo:

var camisa = 10;

Dois sinais de (==) significa igualdade, por exemplo:

if camisa == 10;
console.log('verdade')

E três sinais de (===) significa igual ao valor declarado e se o tipo é identico, ou seja, se é string, boleano, numero...

const numeroPar =(numero % 2) === 0;

*/

const numero = 2;

const numeroPar = (numero % 2) === 0;

console.log(numeroPar);