'use strict';

const contagemRegressiva = (tempo) => {
    const contar = () => {
        console.log(tempo)
        tempo--;
    }
    setInterval(contar, 1000);
}

contagemRegressiva(10);