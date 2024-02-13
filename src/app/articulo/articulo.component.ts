import { Component, Input, inject } from '@angular/core';
import { BdArticulosService } from '../bd-articulos.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-articulo',
    standalone: true,
    imports: [],
    templateUrl: './articulo.component.html',
    styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
    @Input() articulo: any
    private router = inject(Router)

    leerArticulo(id: number, articulo: any) {
        this.router.navigate(['/articulos', id])
    }
}
