const ligar = document.querySelector(".on");
const desligar = document.querySelector(".off")
const lampada = document.querySelector(".img")


function lampBrok() {
    lampada.src = "img/quebrada.jpg"
}

function lampOn() {
    if (! lampBrok) {
        lampada.src = "img/ligada.jpg"
    }
}

function lampOff() {
    lampada.src = "img/desligada.jpg"
}





ligar.addEventListener("click", lampOn)
desligar.addEventListener("click", lampOff)
lampada.addEventListener("dblclick", lampBrok)


