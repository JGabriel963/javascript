const person = {
    nome: "João",
    age: 21,
    dizerOla() {
        console.log(`Hello, World. My name is ${this.nome}. I have ${this.age} years old`)
    }
}

console.log(person)
person.dizerOla()