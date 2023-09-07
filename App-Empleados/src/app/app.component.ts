import { Component } from '@angular/core';
import { Empleado } from './empleado.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Empleados';

empleados:Empleado[]=[
  new Empleado("Adrian","Correa","Vice Presidente Jr", 50000),
  new Empleado("Marce","Meza","Jefa", 450000),
  new Empleado("Luis","Gomez","Tecnico", 35000),
  new Empleado("Maria","Ramirez","Administrativo", 25000)
];

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0

agregarEmpleado(){
  let myempleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
  this.empleados.push(myempleado)

}

}
