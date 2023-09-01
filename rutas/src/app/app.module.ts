
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { CuerpodosComponent } from './cuerpodos/cuerpodos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';


const appRoutes1: Routes = [
  { path: 'contacto', component: ContactoComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: '',component: InicioComponent ,pathMatch: 'full'},
  { path: '**', redirectTo: '/',pathMatch: 'full'
  },
];



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    CuerpoComponent,
    CuerpodosComponent,
    ContactoComponent,
    NosotrosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes1)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
