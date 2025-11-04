// intersection-types.ts
type AB = "A" | "B"; // never
type AC = "A" | "C"; // never

type intersect = AB & AC; // never

const teste: intersect = "A"; // Erro: Type '"A"' is not assignable to type 'never'.
