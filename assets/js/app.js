window.onload = function () {

    // Pequeño script que cambia el texto cuando metes el mouse.
    let arrayPalabras = [
        '¿Cuántos secretos sabes?',
        'Somos seres espirituales con experiencia humana.',
        'Sexo, muerte y matemáticas.',
        'Per aspera ad astra.',
        'Paciencia y persistencia.',
        '¿Te quieres casar conmigo?',
        'Dómr um dauðan hvern.',
        'Aphex Twin - 4',
        'La armonía es caos domesticado.',
        'Safety In Solitude',
        'De una sola fuente todas las cosas dependen.',
        'Cancún: Neo-Tristeza',
        'La sublimación del Powerchord',
        'Muan Januel',
        'Diplopia mental.',
        'El vaivén de tu sangre en momentos de sosiego.',
        'Unus mundus',
        'Tu doppelgänger.',
        'Post-Nouveau avant-garde emofunk.',
        'paypal.me/omontielanimanoir',
        'Don\'t forget 3.oct.10',
        'El que comparte siempre se lleva la mejor parte.',
        'Lucky stars in your eyes.',
        'D3530 Y D151MUL4C10N',
        'Bulgarian otaku.',
        'h411oween Em0',
        'By working the soil, we cultivate the sky',
        'What does Mount Eerie mean?',
        'One more red nightmare.',
        'In you I\'m lost',
        'Petiatil Cx Htdui',
        'Solo y triste voy a estar en este cementerio...',
        'Théâtre de la Cruauté',
        'Death is real.'
    ];
    let menuLatInicio = document.querySelector('#menu-lat-inicio');

    menuLatInicio.onmouseenter = function () {
        let i = Math.floor((Math.random() * arrayPalabras.length));
        menuLatInicio.textContent = arrayPalabras[i];
    }

    menuLatInicio.onmouseleave = function () {
        menuLatInicio.textContent = 'Animanoir';
    }
}