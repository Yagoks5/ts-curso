// faça uma função geradora
function* contador() {
  let count = 0;
  while (true) {
    yield count++;
  }
}
const cont = contador();
console.log(cont.next().value);
console.log(cont.next().value);
console.log(cont.next().value);
