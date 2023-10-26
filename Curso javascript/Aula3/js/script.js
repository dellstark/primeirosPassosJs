const precoEtanol = 4.33;
const precoGasolina = 5.92;
const tipoCombustivel = 'Etanol';
const kmPorLitro = 8;
const distanciaEmKm = 100;

const valorGasto = precoEtanol * distanciaEmKm;

if(tipoCombustivel === 'Gasolina'){
    const valorGasto = precoGasolina * distanciaEmKm;
    console.log(valorGasto.toFixed(2));
} else if(tipoCombustivel === 'Etanol'){
    const valorGasto = precoEtanol * distanciaEmKm;
    console.log(valorGasto.toFixed(2));
} else{
    console.log('Valor inválido');
};