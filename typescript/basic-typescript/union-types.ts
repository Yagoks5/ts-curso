// Union types
let value: string | number;

value = "Hello"; // valid
value = 42; // valid
// value = true; // invalid, would cause a TypeScript error

// Function that accepts union types
function printValue(val: string | number): void {
  console.log(`The value is: ${val}`);
}
printValue("Test string");
printValue(100);
// printValue(true); // invalid, would cause a TypeScript error
