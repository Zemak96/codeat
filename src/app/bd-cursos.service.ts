import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class BdCursosService {

    constructor() { }

    private cursoData = [
        { id: 1, titulo: "Curso avanzado de Javascript", img: "../../assets/img/1250px/01_Cur1.png", descripcion: "hola" },
        { id: 2, titulo: "Curso de PL/SQL para dummies", img: "../../assets/img/1250px/02_Cur2.png", descripcion: "hola" }
    ]

    getCursos() {
        return this.cursoData
    }
}
