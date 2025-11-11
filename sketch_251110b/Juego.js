class Juego {
  constructor() {
    this.etapaActual = 1; // 1=Aire,2=Tierra,3=Agua,4=Fuego,5=Ozai
    this.personaje = new Personaje(20, height - 120);
    this.etapa = new Etapa(this.etapaActual);
    this.estado = "jugando"; // "jugando", "perdiste", "ganaste"
  }

  actualizar() {
    // no actualizar si perdio o gano (pero dejamos dibujar)
    if (this.estado === "perdiste" || this.estado === "ganaste") return;

    // actualizar etapa (genera obstaculos internamente)
    this.etapa.actualizar();

    // actualizar personaje (movimiento y gravedad)
    this.personaje.mover();

    // si etapa < 5 comprobar colisiones y avance borde
    if (this.etapaActual < 5) {
      // chequear colisiones con obstáculos
      for (let o of this.etapa.obstaculos) {
        if (this.personaje.chocaCon(o)) {
          this.estado = "perdiste";
          return;
        }
      }
      // si llega al borde derecho -> pasar a siguiente etapa
      if (this.personaje.x + this.personaje.ancho >= width) {
        this.avanzarEtapa();
      }
    } else {
      // Etapa 5 (Ozai): si toca al enemigo -> gana
      if (this.etapa.enemigo && !this.etapa.derrotado) {
        let d = dist(
          this.personaje.x + this.personaje.ancho / 2,
          this.personaje.y + this.personaje.alto / 2,
          this.etapa.enemigo.x,
          this.etapa.enemigo.y
        );
        if (d < this.etapa.enemigo.r + max(this.personaje.ancho, this.personaje.alto) / 2) {
          this.etapa.derrotado = true;
          this.estado = "ganaste";
        }
      }
    }
  }

  dibujar() {
    // dibuja fondo y elementos por etapa
    this.etapa.dibujar();

    // dibujar personaje encima
    this.personaje.dibujar();

    // mensajes según estado
    if (this.estado === "perdiste") {
      fill(255);
      textAlign(CENTER);
      textSize(32);
      text("¡PERDISTE!", width / 2, height / 2 - 20);
      textSize(16);
      text("Presioná R para reiniciar", width / 2, height / 2 + 10);
    } else if (this.estado === "ganaste") {
      // Ozai final: texto grande al ganar
      fill(255, 230, 100);
      textAlign(CENTER);
      textSize(22);
      text("¡Lo has derrotado, FELICITACIONES!", width / 2, height / 2 + 40);
      textSize(14);
      text("Presioná R para jugar otra vez", width / 2, height / 2 + 70);
    }

    // HUD de etapa arriba izquierda
    fill(0);
    textSize(14);
    textAlign(LEFT);
    let nombres = {1: "AIRE", 2: "TIERRA", 3: "AGUA", 4: "FUEGO", 5: "OZAI"};
    text("Etapa: " + nombres[this.etapaActual], 10, 20);
  }

  avanzarEtapa() {
    this.etapaActual++;
    if (this.etapaActual > 5) this.etapaActual = 5;
    this.personaje.reset();
    this.etapa = new Etapa(this.etapaActual);
    this.estado = "jugando";
  }

  reiniciar() {
    this.etapaActual = 1;
    this.personaje = new Personaje(20, height - 120);
    this.etapa = new Etapa(this.etapaActual);
    this.estado = "jugando";
  }
}
