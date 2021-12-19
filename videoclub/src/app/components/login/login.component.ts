import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  registroForm = this.fb.group({
    usuario: ['', Validators.required],
    password: ['',Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.warn(this.registroForm.value);
  }
}
