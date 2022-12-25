// Escopo global
var x = 1;

var y = 3;

console.log(x, y)


// Escopo local
function teste() {

    var z = 0;

    console.log(z)
}

// console.log(z) => indefinido, pois foi criado dentro do escopo local

teste()

if (true) {
    var w = 1;
}

console.log(w)