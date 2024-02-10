import { Component, inject } from '@angular/core';
import { CursoComponent } from '../curso/curso.component';
import { BdCursosService } from '../bd-cursos.service';


@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CursoComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  private curBD = inject(BdCursosService)
  getCursos(){
    return this.curBD.getCursos()
  }

}
