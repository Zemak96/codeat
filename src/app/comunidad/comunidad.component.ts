import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunidad',
  standalone: true,
  imports: [],
  templateUrl: './comunidad.component.html',
  styleUrl: './comunidad.component.css'
})
export class ComunidadComponent {
  private transcripcion = "(Música)Te damos la bienvenida a nuestros cursos online. Aprende y crece junto a nosotros. Nuevos métodos de aprendizaje. Nuestros mejores cursos: Javascript, Java, HTML5, PHP, Angular, Symfony. Invierte para ti y en tu futuro. Únete a nosotros. CodeaT.(Música)"
  private showTranscripcion: boolean = false
  constructor(private router: Router){
    
  }

  getTranscripcion(){
    return this.transcripcion
  }
  mostrarTranscripcion(){
    return this.showTranscripcion = !this.showTranscripcion
  }
}
