// Selecionando elementos
var adição = document.querySelector("button#somar");
var subtração = document.querySelector("button#subt");
var multiplicação = document.querySelector("button#mult");
var divisão = document.querySelector("button#div");
var txtn1 = document.querySelector("input#txtn1");
var txtn2 = document.querySelector("input#txtn2");

console.log(adição);
console.log(subtração);
console.log(multiplicação);
console.log(divisão);
 
// função para somar
adição.addEventListener("click", function () {
    var n1 = Number(txtn1.value);
    var n2 = Number(txtn2.value);
    let s = n1 + n2
    alert(`A soma dos número ${txtn1.value} e ${txtn2.value} é igual a ${s}`)
});

// função para subtrair
subtração.addEventListener("click", function() {
    var n1 = Number(txtn1.value);
    var n2 = Number(txtn2.value);
    let s = n1 - n2
    alert(`A subtração dos números ${txtn1.value} e ${txtn2.value} é igual a ${s}`)
})

multiplicação.addEventListener("click", function () {
    var n1 = Number(txtn1.value);
    var n2 = Number(txtn2.value);
    let s = n1 * n2;
    alert(`A multiplicação dos números ${txtn1.value} e ${txtn2.value} é igual a ${s}`)
})

// Evento double click
divisão.addEventListener("dblclick", function() {
    var n1 = Number(txtn1.value);
    var n2 = Number(txtn2.value);
    let s = n1 / n2;
    alert(`A divisão dos números ${txtn1.value} e ${txtn2.value} é igual a ${s}`)
})