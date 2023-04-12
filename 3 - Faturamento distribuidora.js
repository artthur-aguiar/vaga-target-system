const faturamentoDiario = /* Inserir aqui o  arquivo JSON */;
const diasComFaturamento = faturamentoDiario.filter((dia) => dia.valor > 0);
const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
let menorFaturamento = Infinity;
let maiorFaturamento = -Infinity;
let diasAcimaDaMedia = 0;

diasComFaturamento.forEach((dia) => {
  if (dia.valor < menorFaturamento) {
    menorFaturamento = dia.valor;
  }
  if (dia.valor > maiorFaturamento) {
    maiorFaturamento = dia.valor;
  }
  if (dia.valor > mediaFaturamento) {
    diasAcimaDaMedia++;
  }
});

console.log(`Menor valor de faturamento: R$${menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);