import { Component, Input, inject } from '@angular/core';
import { BdCursosService } from '../bd-cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {
  @Input() curso:any
  private curBD = inject(BdCursosService)
}

// irACurso(id:number, curso:any){
//   this.router.navigate(['/cursos', id])
// }
