let juego;

function setup() {
  createCanvas(640, 480);
  textFont('Arial');
  juego = new Juego();
}

function draw() {
  juego.actualizar();
  juego.dibujar();
}

function keyPressed() {
  // salto
  if (keyCode === UP_ARROW || key === ' ') {
    juego.personaje.saltar();
  }
  // reiniciar
  if (key === 'r' || key === 'R') {
    juego.reiniciar();
  }
  // avanzar etapa si estamos en Ozai y derrotado (pero eso maneja la clase)
  if (keyCode === ESCAPE) {
    // volver a etapa 1
    juego.reiniciar();
  }
}
