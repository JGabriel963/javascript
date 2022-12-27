// Callback functions
function exibir(num) {
    console.log("A operação resultou em: " + num);
}

function soma(a, b, callback) {
    var s = a + b;
    callback(s);
}

function multiplicação(a, b, cb) {
    var s = a * b;
    cb(s)
}

soma(3, 7, exibir);

multiplicação(5, 2, exibir);

