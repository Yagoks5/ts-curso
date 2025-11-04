const numero = "tst";

if (numero >= 0 && numero <= 5) {
  console.log("O número está entre 0 e 5");
} else if (numero > 5 && numero <= 10) {
  console.log("O número está entre 6 e 10");
} else if (typeof numero !== "number") {
  console.log("Isso não é um número");
}
