import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador.html',
})
export class ContadorComponent {
  contador: number = 0;
  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }
  reiniciar() {
    this.contador = 0;
  }
}
