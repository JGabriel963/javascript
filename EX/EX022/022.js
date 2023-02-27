function lower(arr) {
    const lower = []
    for (let i = 0; i < arr.length; i++) {
     lower.push(arr[i].toLowerCase())
    }
 
    return lower
}

function upeer(arr) {
    const upper = []
    for (let i = 0; i < arr.length; i++) {
     upper.push(arr[i].toUpperCase())
    }
 
    return upper
}


const upper = ["TODAS", "ESSAS", "STRINGS", "TERÃO", "SEUS", "TAMANHOS", "MODIFICADAS"]

console.log(lower(upper))

const minuscula = ["todas", "essas", "strings", "serão", "modificadas"]

console.log(upeer(lower))



