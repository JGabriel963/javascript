// evento mouseover
var title = document.querySelector("#title")

title.addEventListener("mouseover", function() {

    this.style.backgroundColor = "red";
    this.style.color = "#fff"

});

title.style.padding = "10px";
title.style.borderRadius = "10px";

// mouseout
title.addEventListener("mouseout", function () {
    this.style.backgroundColor = "#fff";
    this.style.color = "black"
})

// Afetando outros elementos com mouseover e mouseout
var subtitle = document.querySelector(".subtitle");
subtitle.addEventListener("mouseover", function() {

    var legend = document.querySelector("#legend");
    legend.classList.remove("hide");

});

subtitle.addEventListener("mouseout", function() {

    var legend = document.querySelector("#legend");

    legend.classList.add("hide");

});

let btn = document.querySelector("#btn");
btn.textContent = "Verificar";
