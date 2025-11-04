// overload typescript
function combine(input1: number, input2: number): number;
function combine(input1: string, input2: string): string;
function combine(input1: number, input2: string): string;
function combine(input1: string, input2: number): string;

function combine(input1: number | string, input2: number | string): number | string {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }