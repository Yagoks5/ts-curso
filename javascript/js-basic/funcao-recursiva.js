function recursiva(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * recursiva(num - 1);
  }
}

console.log(recursiva(5)); // Output: 120
