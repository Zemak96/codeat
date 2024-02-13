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
  constructor(private router: Router){

  }
}
