class Etapa {
  // numero: 1..5
  constructor(numero) {
    this.numero = numero;
    this.obstaculos = [];
    this.spawnTimer = 0;
    // ajustar intervalo por etapa (puede ser distinto)
    this.spawnInterval = 90 - (numero - 1) * 8; // más difícil en etapas altas
    if (this.spawnInterval < 50) this.spawnInterval = 50;
    this.color = this.colorPorEtapa();
    // enemigo Ozai (solo en etapa 5)
    if (this.numero === 5) {
      this.enemigo = { x: width - 100, y: height - 120, r: 40 };
      this.derrotado = false;
    } else {
      this.enemigo = null;
      this.derrotado = false;
    }
  }

  colorPorEtapa() {
    switch (this.numero) {
      case 1: return [135, 206, 235]; // Aire - celeste
      case 2: return [60, 160, 60];   // Tierra - verde
      case 3: return [255, 255, 255]; // Agua - blanco
      case 4: return [200, 40, 40];   // Fuego - rojo
      case 5: return [0, 0, 0];       // Ozai - negro
      default: return [120, 120, 120];
    }
  }

  actualizar() {
    // Ozai no genera obstáculos
    if (this.numero === 5) return;

    this.spawnTimer++;
    if (this.spawnTimer >= this.spawnInterval) {
      this.spawnTimer = 0;
      // altura aleatoria: algunas altas, algunas bajas
      let minY = height - 220; // más alto
      let maxY = height - 60;  // cerca del suelo
      let y = random(minY, maxY);
      this.obstaculos.push(new Obstaculo(width + 20, y, this.numero));
    }

    // mover y limpiar obstaculos
    for (let o of this.obstaculos) o.mover();
    this.obstaculos = this.obstaculos.filter(o => !o.fueraDePantalla());
  }

  dibujar() {
    background(this.color[0], this.color[1], this.color[2]);

    // suelo
    fill(100, 70, 40);
    rect(0, height - 60, width, 60);

    if (this.numero === 5) {
      // Ozai: dibujar enemigo (círculo) casi al final
      fill(200, 0, 0);
      ellipse(this.enemigo.x, this.enemigo.y, this.enemigo.r * 2);
      // mostrar texto sólo si derrotado (lo gestiona Juego)
      if (this.derrotado) {
        fill(255);
        textAlign(CENTER);
        textSize(18);
        text("Lograste llegar al dios del fuego Ozai aprendiendo todos los elementos", width/2, height/2 - 10);
        textSize(20);
        text("¡Lo has derrotado, FELICITACIONES!", width/2, height/2 + 20);
      } else {
        // instrucción para llegar a Ozai
        fill(255);
        textAlign(CENTER);
        textSize(14);
        text("Llega al enemigo rojo para derrotarlo", width/2, 30);
      }
      return;
    }

    // dibujar obstáculos
    for (let o of this.obstaculos) o.dibujar();

    // indicación borde para avanzar
    fill(255);
    textSize(12);
    textAlign(RIGHT);
    text("Llegá al borde derecho para avanzar", width - 10, 18);
  }
}
