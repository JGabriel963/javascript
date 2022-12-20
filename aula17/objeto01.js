let amigo = {nome: 'José', sexo: 'M', peso: 82.4, engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}}
// console.log(typeof amigo) objeto, assim como um awrray 
// console.log(`${amigo.nome} pesa ${amigo.peso}kg`) 82.4 kg
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)
