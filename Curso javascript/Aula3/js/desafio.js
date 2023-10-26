/* Tipos de operadores de condicional

*/

const numero = 12;

const numeroPar = (numero % 12) === 0;

if(numeroPar === 0){
    console.log('o numero é invalido')
} else if(numeroPar){
    console.log('sim') 
}else{
    console.log('não')
};

/* posso fazer na forma negativa usando uima ! no inicio da constante

if(!numeroPar){
   console.log('executei') 
}

*/