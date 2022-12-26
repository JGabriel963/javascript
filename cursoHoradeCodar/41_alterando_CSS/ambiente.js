let body = document.querySelector("body")
body.style.background = 'black';
body.style.color = "#fff"

// selecionar elementos
var title = document.querySelector("#title");
var btn = document.querySelector('#btn')

// adiconar o estilo
title.style.color = "red";

/*
background-color 
title.style.backgroundColor = "yellow"
title.style.borderRadius = "10px"
title.style.padding = "10px"
title.style.width = "300px"
*/

// adicioando vários estilos
title.style.cssText = "color: red; background-color: yellow; width: 300px; padding: 10px; border-radius: 10px;";

btn.textContent = "Verificar"
btn.style.padding = "5px";
btn.style.borderRadius = "5px";
