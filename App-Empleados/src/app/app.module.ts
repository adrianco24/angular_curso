import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadohijocComponent } from './empleadohijoc/empleadohijoc.component';
import { CaracteristicasEmpleadosCComponent } from './caracteristicas-empleados-c/caracteristicas-empleados-c.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadohijocComponent,
    CaracteristicasEmpleadosCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
