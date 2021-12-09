import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {
    registroForm = this.fb.group({
      usuario: ['', Validators.required],
      paswword: ['',Validators.required]
    });

    constructor(private fb: FormBuilder) { }

    onSubmit() {
      console.warn(this.registroForm.value);
    }
 }
