class Personaje {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 40;
    this.alto = 60;
    this.velY = 0;
    this.gravedad = 0.9;
    this.enSuelo = true;
    this.velX = 5;
  }

  mover() {
    // movimiento horizontal
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velX;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velX;
    }
    this.x = constrain(this.x, 0, width - this.ancho);

    // gravedad
    this.velY += this.gravedad;
    this.y += this.velY;

    // suelo estable
    let sueloY = height - 60; // línea del suelo
    if (this.y + this.alto >= sueloY) {
      this.y = sueloY - this.alto;
      this.velY = 0;
      this.enSuelo = true;
    } else {
      this.enSuelo = false;
    }
  }

  dibujar() {
    fill(255, 220, 80);
    rect(this.x, this.y, this.ancho, this.alto, 6);
    fill(0);
    ellipse(this.x + 12, this.y + 18, 4, 4);
    ellipse(this.x + this.ancho - 12, this.y + 18, 4, 4);
  }

  saltar() {
    if (this.enSuelo) {
      this.velY = -14;
      this.enSuelo = false;
    }
  }

  chocaCon(obj) {
    // AABB simple
    let ox = obj.x;
    let oy = obj.y - (obj.alto || obj.ancho)/2; // ajustar si es un ellipse; muchos objetos usan y como centro
    let ow = obj.ancho || (obj.r ? obj.r*2 : 30);
    let oh = obj.alto || (obj.r ? obj.r*2 : 30);

    return (
      this.x < ox + ow &&
      this.x + this.ancho > ox &&
      this.y < oy + oh &&
      this.y + this.alto > oy
    );
  }

  reset() {
    this.x = 20;
    this.y = height - 120;
    this.velY = 0;
    this.enSuelo = true;
  }
}
