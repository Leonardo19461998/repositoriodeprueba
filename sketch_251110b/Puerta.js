class Puerta {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 40;
    this.alto = 80;
  }

  dibujar() {
    fill(120, 70, 20);
    rect(this.x, this.y - this.alto, this.ancho, this.alto);
  }
}
