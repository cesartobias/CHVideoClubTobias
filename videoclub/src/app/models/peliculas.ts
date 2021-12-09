import { DecimalPipe } from "@angular/common";

export interface Pelicula{
    id: number;
    year: number;
    nombre: string;
    tipoPelicula: string;
    precio: number;
}