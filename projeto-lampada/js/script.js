const ligarDesligar = document.querySelector(".on");
const lampada = document.querySelector(".img")

function isLampBroken () {
    return lampada.src.indexOf('quebrada') > -1
}


function lampBrok() {
    lampada.src = "img/quebrada.jpg"

    setTimeout(function() {
        alert("Clique duas vezes no botão ou atualize a página para concertar a lâmpada.")
    }, 250)
}


function lampOn() {
    if (!isLampBroken()) {
        lampada.src = "img/ligada.jpg"
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lampada.src = "img/desligada.jpg"
    } 
}
    

function lampBroken() {
    lampada.src = "img/quebrada.jpg"
}

function lampOnOff() {
    if(ligarDesligar.textContent == 'Ligar') {
        lampOn();
        ligarDesligar.textContent = 'Desligar'
        ligarDesligar.classList.toggle("off")
    } else {
        lampOff();
        ligarDesligar.textContent = 'Ligar'
        ligarDesligar.classList.toggle("off")
    }
}

function Concert() {
    if(isLampBroken) {
        lampada.src = "img/desligada.jpg"
    }
}

ligarDesligar.addEventListener("click", lampOnOff)
ligarDesligar.addEventListener("dblclick", Concert)
lampada.addEventListener("dblclick", lampBrok)
lampada.addEventListener("mouseenter", lampOn)
lampada.addEventListener("mouseleave", lampOff)
lampada.addEventListener("dblclick", lampBroken)


