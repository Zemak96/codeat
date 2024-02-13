import { Component, OnInit, inject } from '@angular/core';
import { CursoComponent } from '../curso/curso.component';
import { BdCursosService } from '../bd-cursos.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-cursos',
    standalone: true,
    imports: [CursoComponent],
    templateUrl: './cursos.component.html',
    styleUrl: './cursos.component.css'
})
export class CursosComponent {

    private curBD = inject(BdCursosService)
    private transcripcion = "(Música)Te damos la bienvenida a nuestros cursos online. Aprende y crece junto a nosotros. Nuevos métodos de aprendizaje. Nuestros mejores cursos: Javascript, Java, HTML5, PHP, Angular, Symfony. Invierte para ti y en tu futuro. Únete a nosotros. CodeaT.(Música)"
    private showTranscripcion: boolean = false
    constructor(private router: Router) {

    }

    getCursos() {
        return this.curBD.getCursos()
    }
    getTranscripcion() {
        return this.transcripcion
    }
    mostrarTranscripcion() {
        return this.showTranscripcion = !this.showTranscripcion
    }

}
