window.onload = function () {

let arrayPalabras = ['Sé muchos secretos', 'Somos seres espirituales con experiencia humana', 'Sexo, muerte y matemáticas', 'Éste es el link al inicio', 'Per aspera ad astra'];    

let menuLatInicio = document.querySelector('#menu-lat-inicio');

menuLatInicio.onmouseenter = function(){
    let i = Math.floor((Math.random()*arrayPalabras.length));
    menuLatInicio.textContent = arrayPalabras[i];
}

menuLatInicio.onmouseleave = function(){
    menuLatInicio.textContent = 'Animanoir';
}
}