// length - informa a quantidade de elementos 

var arr = [1, 2, 3, 4, 5];

console.log(arr.length);

// push - adicionar elementos ao fim do array

arr.push(6); // adicionando o number '6'
console.log(arr);

// pop - remover elemento do fim do array

arr.pop();
console.log(arr)

// unshift - adicionar elemento no começo do array
arr.unshift(0);
console.log(arr)
arr.unshift('teste')

// shift
console.log(arr)
arr.shift();
console.log(arr)

// acessar o último elemento do array
console.log(arr[arr.length - 1]);

// isArray - verificar se o dado é um array

console.log(Array.isArray(5));
console.log(Array.isArray(arr));