import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdArticulosService {

  constructor() { }

  private articuloData = [
    {id:1, titulo: "Desbloqueando el Poder del Desarrollo Web: Las Ventajas de JavaScript para Principiantes", img:"../../assets/img/1024px/01_Art1.png", texto: "articulo1 completo"},
    {id:2, titulo: "El Diseño y prototipado Web: La Piedra Angular de las Aplicaciones Web del Futuro", img:"../../assets/img/1024px/02_Art2.png", texto: "articulo2 completo"},
    {id:3, titulo: "La Revolución en las Pantallas: La Tecnología de Grafeno como Pionera en Dispositivos", img:"../../assets/img/1024px/03_Art3.png", texto: "articulo3 completo"}
  ]
  
  getArticulos(){
    return this.articuloData
  }
  getArticulosRecientes(){
    return this.articuloData.slice(0, 3)
  }
  getArticuloById(id:number){
    let articulo
    this.articuloData.forEach(art => {
      if(art.id == id) articulo = art
    });
    return articulo
  }
}
