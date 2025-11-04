// tipos de funções em TypeScript
// função sem retorno (void)
function logMessage(message: string): void {
  console.log(message);
}

// função com retorno (number)
function add(a: number, b: number): number {
  return a + b;
}

// função com parâmetro opcional
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

// função com parâmetro padrão
function multiply(a: number, b: number = 2): number {
  return a * b;
}

// função com tipo de retorno personalizado
type User = {
  id: number;
  name: string;
};

function createUser(id: number, name: string): User {
  return { id, name };
}

//função com parametro um tipo type
type Point = {
  x: number;
  y: number;
};

function printPoint(point: Point): void {
  console.log(`Point coordinates: (${point.x}, ${point.y})`);
}

function mapArray(
  array: number[],
  callback: (item: number) => number
): number[] {
  const result: number[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

// exemplo de uso das funções
logMessage("This is a log message.");
console.log(add(5, 10));
console.log(greet("Alice"));
console.log(greet("Bob", "Good morning"));
console.log(multiply(4));
console.log(multiply(4, 3));
console.log(createUser(1, "Charlie"));
printPoint({ x: 10, y: 20 });
console.log(mapArray([1, 2, 3, 4], (item) => item * 2));
