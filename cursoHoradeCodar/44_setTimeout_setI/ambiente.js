// setTimeout
console.log("Antes do setTimeout")

setTimeout(function() {

    console.log("Testando o setTimeout")  

}, 5000); // Será executado depois de 5s (1s = 1000 milisegundos)

console.log("Depois do setTimeout") // Mesmo sendo codado depois, será executado.

// setInterval
setInterval(function() {

    console.log("Testando setInterval");
}, 1000);
