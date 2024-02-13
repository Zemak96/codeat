import { Component, inject } from '@angular/core';
import { ArticuloComponent } from '../articulo/articulo.component';
import { BdArticulosService } from '../bd-articulos.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-articulos',
    standalone: true,
    imports: [ArticuloComponent],
    templateUrl: './articulos.component.html',
    styleUrl: './articulos.component.css'
})
export class ArticulosComponent {
    private artBD = inject(BdArticulosService)
    constructor(private router: Router) { }
    getArticulos() {
        return this.artBD.getArticulos()
    }

}
