import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Peliculas } from 'src/app/mock-peliculas';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  
})
/* export class ListadoComponent  {
  peliculaForm = this.fb.group({
    nombre:['']
   });
   
   constructor(private fb: FormBuilder) { }


   onSubmit() {
  
    console.warn(this.peliculaForm.value);
  }
}
 */

export class ListadoComponent  {

  @Input() items = [ 
  { id: 1, year: 1989, nombre: 'Chucky', tipoPelicula: 'Terror', precio: "$19.00", url:'/assets/images/chucky1.jpg'},
  { id: 2, year: 1992, nombre: 'Chucky 2', tipoPelicula: 'Terror', precio: "$20.00", url:'/assets/images/chucky2.jpg'},
  { id: 3, year: 1993, nombre: 'Chucky 3', tipoPelicula: 'Terror', precio: "$25", url:'/assets/images/chucky3.jpg'},
  { id: 4, year: 2001, nombre: 'SAW', tipoPelicula: 'Terror', precio: "$10", url:'/assets/images/saw.jpg'},
  { id: 5, year: 2002, nombre: 'SAW 2', tipoPelicula: 'Terror', precio: "$11", url:'/assets/images/saw2.jpg'},
  { id: 6, year: 2003, nombre: 'SAW 3', tipoPelicula: 'Terror', precio: "$145", url:'/assets/images/saw3.jpg'},
  { id: 7, year: 2004, nombre: 'SAW 4', tipoPelicula: 'Terror', precio: "$18", url:'/assets/images/saw4.jpg'},
  { id: 8, year: 2010, nombre: 'SAW 5', tipoPelicula: 'Terror', precio: "$20", url:'/assets/images/saw5.jpg'},
  { id: 9, year: 2011, nombre: 'SAW 6', tipoPelicula: 'Terror', precio: "$41", url:'/assets/images/saw6.jpg'},
  { id: 10, year: 2019, nombre: 'SAW 7', tipoPelicula: 'Terror', precio: "$50", url:'/assets/images/saw7.jpg'}
]


/*   @Input() items = [ {
    title: "1 slide label",
    summery: "1 slide label summery",
    url: "https://via.placeholder.com/200?text=first"
  },
  {
    title: "2 slide label",
    summery: "2 slide label summery",
    url: "https://via.placeholder.com/200?text=second"
  },
  {
    title: "3 slide label",
    summery: "3 slide label summery",
    url: "https://via.placeholder.com/200?text=third"
  }];
   */

  /* ngAfterViewInit(){
    $('#carouselExampleCaptions').carousel()
  } */
}
