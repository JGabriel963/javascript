let num = parseFloat(prompt("Digite um número para visualizar sua tabuada de 1 a 20:"))
let tabuada = ""
let display = false
do {
    let option = prompt("Qual operação deseja:\n1 - Adição\n2 - Multiplicação")
    switch (option) {
        case "1": 
            for (let c = 1; c <=20; c++) {
                tabuada += `${num} + ${c} = ${num + c}\n`
            }
            display = true
            break
        case "2":
            for (let i = 1; i <= 20; i++) {
                tabuada += `${num} x ${i} = ${num * i}\n`
            }
            display = true
            break
        default:
            alert("Opção Inválida!")
    }
} while(display === false)
 alert(tabuada)