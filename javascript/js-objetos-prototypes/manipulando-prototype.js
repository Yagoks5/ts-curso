const objA = {
  chaveA: "A",
};
const objB = {
  chaveB: "B",
};

Object.setPrototypeOf(objB, objA); // Define objA como protótipo de objB

console.log(objB.chaveA);
