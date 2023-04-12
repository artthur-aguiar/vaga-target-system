function fibonacci(n) {
  if (n < 0) {
    return "O número deve ser maior ou igual a zero";
  } else if (n <= 1) {
    return "O número informado pertence à sequência de Fibonacci";
  } else {
    let a = 0;
    let b = 1;
    let c = 0;
    while (c < n) {
      c = a + b;
      a = b;
      b = c;
    }
    if (c === n) {
      return "O número informado pertence à sequência de Fibonacci";
    } else {
      return "O número informado não pertence à sequência de Fibonacci";
    }
  }
}

// Usando a função
console.log(fibonacci(8)); // O número informado pertence à sequência de Fibonacci
console.log(fibonacci(10)); // O número informado não pertence à sequência de Fibonacci
