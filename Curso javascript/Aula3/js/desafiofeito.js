const valorEtanol = 5.79;
const valorGasolina = 6.66;
const kmPorLitro = 10;
const distancia = 100;
const tipoCombustivel = 'Etanol';

const litroConsumido = distancia / kmPorLitro;

if (tipoCombustivel === 'Etanol'){
    const valorGasto = litroConsumido * valorEtanol;
    console.log(valorGasto.toFixed(2));
} else if(tipoCombustivel === 'Gasolina'){
    const valorGasto = litroConsumido * valorGasolina;
    console.log(valorGasto.toFixed(2));
} else{
    console.log('Valor Inválido')
};


