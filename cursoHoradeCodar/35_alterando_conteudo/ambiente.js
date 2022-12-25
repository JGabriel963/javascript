// selecionar o documento
var title = document.querySelector('h1#title');

// innerHTML
title.innerHTML = 'Testando texto alterado!';
title.innerHTML += ' Hello, Wold';

// textContent -> mais utilizado, recomendado e perfomático
var subtitle = document.querySelector('h2.subtitle');

console.log(subtitle);

subtitle.textContent = "Testando o textContent";