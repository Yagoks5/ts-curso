// ===============================
// Utility Types - TypeScript
// ===============================

// 1️⃣ Partial<T> - todas as propriedades opcionais
interface User {
  id: number;
  name: string;
  email: string;
}

const updateUser = (user: Partial<User>) => {
  console.log("Atualizando usuário:", user);
};

updateUser({ name: "Yago" });
updateUser({ email: "yago@example.com" });

// ===============================

// 2️⃣ Required<T> - todas as propriedades obrigatórias
interface Config {
  host?: string;
  port?: number;
}

const config: Required<Config> = {
  host: "localhost",
  port: 3000,
};

// ===============================

// 3️⃣ Readonly<T> - propriedades somente leitura
interface Todo {
  id: number;
  task: string;
}

const todo: Readonly<Todo> = {
  id: 1,
  task: "Aprender TypeScript",
};

// todo.task = "Tentar mudar"; // ❌ erro

// ===============================

// 4️⃣ Pick<T, K> - seleciona propriedades
type UserPreview = Pick<User, "id" | "name">;

const userPreview: UserPreview = {
  id: 1,
  name: "Yago",
};

// ===============================

// 5️⃣ Omit<T, K> - remove propriedades
type UserWithoutEmail = Omit<User, "email">;

const userNoEmail: UserWithoutEmail = {
  id: 2,
  name: "Ronchi",
  // email: "..." ❌ não permitido
};

// ===============================

// 6️⃣ Record<K, T> - mapeia chaves para valores
type Page = "home" | "about" | "contact";
type PageViews = Record<Page, number>;

const views: PageViews = {
  home: 100,
  about: 50,
  contact: 20,
};

// ===============================

// 7️⃣ Exclude<T, U> e Extract<T, U>
type T1 = "a" | "b" | "c";
type T2 = "a" | "c";

type Excluded = Exclude<T1, T2>; // "b"
type Extracted = Extract<T1, T2>; // "a" | "c"

// ===============================

// 8️⃣ ReturnType<T> e Parameters<T>
function sum(a: number, b: number) {
  return a + b;
}

type SumReturn = ReturnType<typeof sum>; // number
type SumParams = Parameters<typeof sum>; // [number, number]

// ===============================
// Fim dos Utility Types
// ===============================
