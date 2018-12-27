window.onload = function () {

    // Pequeño script que cambia el texto cuando metes el mouse.
    let arrayPalabras = ['Sé muchos secretos. ¿Sabes más secretos que yo?', 'Somos seres espirituales con experiencia humana', 'Sexo, muerte y matemáticas', 'Éste es el link al inicio', 'Per aspera ad astra', 'Paciencia y persistencia', '¿Te quieres casar conmigo?'];
    

    let menuLatInicio = document.querySelector('#menu-lat-inicio');

    menuLatInicio.onmouseenter = function () {
        let i = Math.floor((Math.random() * arrayPalabras.length));
        menuLatInicio.textContent = arrayPalabras[i];
    }

    menuLatInicio.onmouseleave = function () {
        menuLatInicio.textContent = 'Animanoir';
    }
}