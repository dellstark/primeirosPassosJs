const nota1 = 8;
const nota2 = 6;
const nota3 = 8;

const total = nota1 + nota2 + nota3;
const media = total / 3;

console.log(media);

if (media <= 5) {
  console.log("Reprovado");
} else if (media >= 5 && media <= 7) {
  console.log("Vai para recuperação");
} else if(media > 7) {
  console.log("Aprovado");
}
