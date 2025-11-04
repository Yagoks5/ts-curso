// exemplo de type-guard em TypeScript com um código.
function isString(value: any): value is string {
  return typeof value === "string";
}

function example(value: any) {
  if (isString(value)) {
    // Aqui o TypeScript sabe que 'value' é uma string
    console.log("A string em maiúsculas é:", value.toUpperCase());
  } else {
    console.log("O valor não é uma string.");
  }
}

example("Olá, mundo!");
