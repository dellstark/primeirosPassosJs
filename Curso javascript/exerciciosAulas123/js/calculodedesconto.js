/*formas de pagamento
1 debito 
2 dinheiro ou pix 
3 parcelado em 2x 
4 acima de 2 parcelas */

const precoEtiqueta = 50;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
  const debito = 10 % 100;
  const total = precoEtiqueta - debito;
  console.log("Forma de pagamento: Debito");
  console.log("Valor a pagar:", total.toFixed(2));
} else if (formaDePagamento === 2) {
  const dinheiroOuPix = 15 % 100;
  const total = precoEtiqueta - dinheiroOuPix;
  console.log("Forma de pagamento: Dinheiro ou Pix");
  console.log("Valor a pagar:", total.toFixed(2));
} else if (formaDePagamento === 3) {
  const total = precoEtiqueta / 2;
  console.log("Forma de pagamento: 2X");
  console.log("Valor a pagar: 2x de", total.toFixed(2));
} else if (formaDePagamento === 4) {
  const juros = 10 % precoEtiqueta;
  const total = juros + precoEtiqueta;
  console.log("Forma de pagamento: Mais de 2x");
  console.log("Valor a pagar:", total.toFixed(2));
}
