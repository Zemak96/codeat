import { Component, OnInit, inject } from '@angular/core';
import { BdArticulosService } from '../bd-articulos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-articulo-ext',
    standalone: true,
    imports: [],
    templateUrl: './articulo-ext.component.html',
    styleUrl: './articulo-ext.component.css'
})
export class ArticuloExtComponent implements OnInit {
    private articulos = inject(BdArticulosService)
    private location = inject(Location)
    articulo: any;

    constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        const id = parseInt(this.activatedRoute.snapshot.params['id'])
        this.articulo = this.articulos.getArticuloById(id);
    }
    volverArticulos() {
        this.router.navigate(['articulos'])
    }
}
