import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CursosComponent } from './cursos/cursos.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ArticuloExtComponent } from './articulo-ext/articulo-ext.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: InicioComponent,
        title: 'Inicio - CodeaT',
    },
    {
        path: 'articulos',
        component: ArticulosComponent,
        title: 'Artículos - CodeaT',
    },
    {
        path: 'cursos',
        component: CursosComponent,
        title: 'Cursos - CodeaT',
    },
    {
        path: 'comunidad',
        component: ComunidadComponent,
        title: 'Comunidad - CodeaT',
    },
    {
        path: 'contacto',
        component: ContactoComponent,
        title: 'Contacto - CodeaT',
    },
    {
        path: 'articulos/:id',
        component: ArticuloExtComponent,
        title: 'Artículo - CodeaT',
    },
];
