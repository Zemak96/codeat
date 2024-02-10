import { Component, inject } from '@angular/core';
import { BdArticulosService } from '../bd-articulos.service';
import { ArticuloComponent } from '../articulo/articulo.component';
import { ArticuloExtComponent } from '../articulo-ext/articulo-ext.component';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ArticuloComponent, ArticuloExtComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  private articulos = inject(BdArticulosService)
  private router = inject(Router)

  
  getArticulosRecientes(){
    return this.articulos.getArticulosRecientes()
  }
  leerArticulo(id:number, articulo:any){
    this.router.navigate(['/articulos', id])
  }
  enviarFormulario(){
    alert("¡Gracias por suscribirte!")
  }
}
