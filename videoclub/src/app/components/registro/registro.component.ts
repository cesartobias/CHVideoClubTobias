import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {
    loginForm = this.fb.group({
      nombre: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['',Validators.required]
    });

 
    constructor(private fb: FormBuilder,private toast: HotToastService) { }

    onSubmit(model:Usuarios) {
      console.log('usuario guardado correctamente: ', model);
      console.warn(this.loginForm.value);
     this.toast.success('Usuario Guardado Correctamente');
    }
 }
