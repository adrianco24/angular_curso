import { Component, Input } from '@angular/core';
import{ Empleado } from './../empleado.module'


@Component({
  selector: 'app-empleadohijoc',
  templateUrl: './empleadohijoc.component.html',
  styleUrls: ['./empleadohijoc.component.css']
})
export class EmpleadohijocComponent {

  @Input()empleadoDeLista:Empleado;
  @Input() indice:number

}
