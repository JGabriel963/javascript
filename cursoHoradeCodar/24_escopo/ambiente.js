// Escopo global
var x = 1;

var y = 3;

console.log(x, y)


// Escopo global
function teste() {

    var z = 0;

    console.log(z)
}

// console.log(z) => indefinido

teste()

if (true) {
    var w = 1;
}

console.log(w)