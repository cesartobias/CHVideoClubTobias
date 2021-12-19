import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { ListadoComponent } from './components/listado/listado.component';
import { InfoComponent } from './components/info/info.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
 import { RouterModule } from '@angular/router'; 
 
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    ListadoComponent,
    InfoComponent,
    MenuComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
   AppRoutingModule,
   RouterModule.forRoot([]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
