function fibonacci(num) {
  const resultado = [];

  for (let i = 0; i < num; i++) {
    if (i < 2) {
      resultado.push(1);
    } else {
      const a = resultado[i - 1];
      const b = resultado[i - 2];
      resultado.push(a + b);
    }
  }

  return resultado;
}

const numerosFibonacci = fibonacci(6);

console.log(numerosFibonacci);
