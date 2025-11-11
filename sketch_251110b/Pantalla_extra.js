class PantallaInicio {
  dibujar() {
    background(0);
    fill(255);
    textSize(28);
    textAlign(LEFT);
    text("AANG Y EL CAMINO DE LOS ELEMENTOS", 40, 200);
    textSize(18);
    text("Presiona ENTER para comenzar", 120, 250);
    text("Presiona 'C' para ver los créditos", 120, 280);
  }
}

class PantallaInstrucciones {
  dibujar() {
    background(20, 30, 60);
    fill(255);
    textSize(22);
    textAlign(LEFT);
    text("INSTRUCCIONES", 220, 100);
    textSize(16);
    text("- Usa las flechas para moverte y la BARRA o ↑ para saltar.", 100, 160);
    text("- Esquiva los obstáculos de cada elemento.", 100, 190);
    text("- Si caes o te golpea algo, pierdes la prueba.", 100, 220);
    text("- Toca el pergamino para pasar a la siguiente etapa.", 100, 250);
    text("Presiona ENTER para empezar tu entrenamiento.", 100, 300);
  }
}

class PantallaCreditos {
  dibujar() {
    background(10, 10, 10);
    fill(255);
    textSize(20);
    textAlign(LEFT);
    text("CRÉDITOS", 250, 100);
    textSize(16);
    text("Desarrollado por: [Tu nombre] y [Compañero/a]", 140, 150);
    text("Inspirado en Avatar: The Last Airbender", 150, 180);
    text("Proyecto académico - UNLP", 190, 210);
    text("Presiona 'R' para reiniciar", 200, 260);
  }
}
