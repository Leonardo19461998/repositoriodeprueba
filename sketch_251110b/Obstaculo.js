class Obstaculo {
  constructor(x, y, etapaNum) {
    this.x = x;
    this.y = y;
    this.ancho = 30;
    this.alto = 30;
    this.vel = random(4, 7);
    this.color = this.colorPorEtapa(etapaNum);
  }

  colorPorEtapa(num) {
    switch (num) {
      case 1: return [200, 240, 255]; // aire
      case 2: return [150, 100, 50];  // tierra
      case 3: return [120, 180, 255]; // agua
      case 4: return [255, 120, 0];   // fuego
      default: return [255];
    }
  }

  mover() {
    this.x -= this.vel;
  }

  dibujar() {
    fill(this.color[0], this.color[1], this.color[2]);
    ellipse(this.x, this.y, this.ancho, this.alto);
  }

  fueraDePantalla() {
    return this.x + this.ancho < 0;
  }
}
