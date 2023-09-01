import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  mensaje:string=""
  registrado=false

  usuarioRegistrado(){
    this.registrado=true
    this.mensaje="Usuario registrado correctamente"
  }
}
