class Pergamino {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 30;
    this.alto = 40;
  }

  dibujar() {
    fill(255, 230, 150);
    rect(this.x, this.y, this.ancho, this.alto, 5);
  }
}
