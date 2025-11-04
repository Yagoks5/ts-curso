// quais são os metodos de Promises em JavaScript?
// Em JavaScript, as Promises possuem vários métodos úteis
// que ajudam a lidar com operações assíncronas. Aqui estão alguns dos principais métodos:

// 1. .then(onFulfilled, onRejected)
// Usado para lidar com o resultado de uma Promise quando ela é resolvida ou rejeitada.
let promise1 = new Promise((resolve, reject) => {
  resolve("Sucesso!");
});

promise1.then(
  (value) => {
    console.log(value);
  }, // onFulfilled
  (error) => {
    console.error(error);
  } // onRejected
);

// 2. .catch(onRejected)
// Usado para lidar com erros ou rejeições de uma Promise.
let promise2 = new Promise((resolve, reject) => {
  reject("Erro!");
});

promise2.catch((error) => {
  console.error(error);
});

// 3. .finally(onFinally)
// Executa um callback quando a Promise é concluída, independentemente do resultado.
let promise3 = new Promise((resolve, reject) => {
  resolve("Concluído!");
});

promise3.finally(() => {
  console.log("Operação finalizada.");
});

// 4. Promise.all(iterable)
// Retorna uma nova Promise que resolve quando todas as Promises no iterable forem resolvidas.
let promiseA = Promise.resolve(1);
let promiseB = Promise.resolve(2);
let promiseC = Promise.resolve(3);

Promise.all([promiseA, promiseB, promiseC]).then((values) => {
  console.log(values); // [1, 2, 3]
});
