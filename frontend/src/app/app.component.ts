import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  nombre = 'Pepe';
  textoPlaceholder = 'Escriba algo aquí...';
  deshabilitado = true;
  imagenSrc = 'data:image/png;base64,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';

  texto = 'Esto es un video sobre eventBinding';
  textoInput = '';

  cambiarTexto(): void {
    this.texto = 'En el próximo vídeo se verá two-way databinding';
  }

  constructor() {
    setInterval(() => {this.nombre = "Javier"; this.deshabilitado = false}, 3000);
  }
}
