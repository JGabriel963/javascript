function contemChave(object, key) {
    
    return object.hasOwnProperty(key);
}

// Exemplo de uso
let person = {nome: "João", age: 21}
console.log(contemChave(person, 'nome'));
console.log(contemChave(person, 'job'))