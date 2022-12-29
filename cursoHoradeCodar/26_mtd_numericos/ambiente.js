// parseFloat()

console.log(parseFloat('12.999')); // String em ponto flutuante
console.log(Number.parseFloat('12.999')); // O JS permite usar metodos sem citar o objeto

// parseInt()

console.log(parseInt('10')); // String em Inteiro
console.log(parseInt('16.70')); // Float em Int

// toFixed

console.log(23.28482348234.toFixed(2));

// isNaN

console.log(isNaN('teste')); // retorna true se o valor não é um número
console.log(isNaN(12)); // retorna false se o valor for um número

// MAX_VALUE e MIN_VALUE

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// Number

console.log(Number('20')) // Usando Number, o objeto fica encarregado de converter pra Int ou float
console.log(Number('19.8')) // Transformou em float
