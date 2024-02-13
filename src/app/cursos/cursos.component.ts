import { Component, inject } from '@angular/core';
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
  constructor(private router: Router){
    
  }
  getCursos(){
    return this.curBD.getCursos()
  }

}
