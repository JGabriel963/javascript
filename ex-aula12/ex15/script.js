function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'img/foto-manha.jpg'
        document.body.style.background = '#c38e7c'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'img/foto-tarde.jpg'
        document.body.style.background = '#656446'
        
    } else {
        // Boa noite
        img.src = 'img/foto-noite.jpg'
        document.body.style.background = '#372c30'
    }
}
