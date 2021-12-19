import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  peliculaForm = this.fb.group({
    nombre:['']
   });
   
   constructor(private fb: FormBuilder) { }


   onSubmit() {
  
    console.warn(this.peliculaForm.value);
  }
}
