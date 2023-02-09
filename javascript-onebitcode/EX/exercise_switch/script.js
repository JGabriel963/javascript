const valorEmMetros = prompt("Digite um valor em metros para obter sua conversão: ");

let valorConvertido = parseFloat(valorEmMetros)

const option = prompt("Para qual unidade de mediada deseja converter:\n1 - milímetro(mm)\n2 - centímetro(cm)\n3 - decímetro(dm)\n4 - decâmetro(dam)\n5 - hectômetro(hm)\n6 - quilômetro(km)");

const optionNumber = parseFloat(option);

switch (optionNumber){
    case 1:
        valorConvertido *= 1000
        alert(`Resultado: ${valorConvertido}`)
        break
    case 2:
        valorConvertido *= 100
        alert(`Resultado: ${valorConvertido}`)
        break
    case 3:
        valorConvertido *= 10
        alert(`Resultado: ${valorConvertido}`)
        break
    case 4:
        valorConvertido *= 0.1
        alert(`Resultado: ${valorConvertido}`)
        break
    case 5:
        valorConvertido *= 0.01
        alert(`Resultado: ${valorConvertido}`)
        break
    case 6:
        valorConvertido *= 0.001
        alert(`Resultado: ${valorConvertido}`)
        break
    default:
        alert("Opção inválida! Recarregue a página")
}