let led;
let galaxia;
let x = -200;

//Array de imágenes de galaxias
let galaxias = ["../js/led/orion.jpg", "../js/led/horse.jpg", "../js/led/swan.jpg", "../js/led/bubble.jpg", "../js/led/n3.jpg", "../js/led/westerlund.jpg", "../js/led/supernova.jpg"];
let galaxiaElegida;

function preload() {
  //Selecciona un index de galaxias al azar
  galaxiaElegida = (int(random(galaxias.length)));
  galaxia = loadImage(galaxias[galaxiaElegida]);
  led = loadImage("led-transparente.png");
}

function setup() {
  //Usa un div con id p5 como canvas.
  let cnv = createCanvas(301, 455);
  cnv.parent("p5");
}

function draw() {
  background(0);
  x += 0.05;
  push();
  if (x >= -100) {
    galaxiaElegida = (int(random(galaxias.length)));
    galaxia = loadImage(galaxias[galaxiaElegida]);
    x = -200;
  }
  image(galaxia, x, 0);
  pop();

  //Máscara
  image(led, 0, 0);
}