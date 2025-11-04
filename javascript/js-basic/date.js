const data = new Date();
console.log(data.toLocaleDateString("pt-BR", { dateStyle: "full" }));

console.log("Dia " + data.getDate());
console.log("Mês " + (data.getMonth() + 1));
console.log("Ano " + data.getFullYear());
console.log("Hora " + data.getHours());
console.log("Minuto " + data.getMinutes());
console.log("Segundo " + data.getSeconds());

// Formatação manual
function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const minuto = zeroAEsquerda(data.getMinutes());
  const segundo = zeroAEsquerda(data.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const dataBrasil = formataData(data);
console.log(dataBrasil);
