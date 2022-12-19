function verificar() {
    var data =  new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verefique os dados e tente novemente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'img/criaca-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'img/criaca-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}