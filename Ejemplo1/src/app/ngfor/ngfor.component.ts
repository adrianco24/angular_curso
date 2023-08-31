import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  cursos:string[]=['html','ANGULAR','PHP'];

  //creo un array de objetos para la tabla
  animales:Array<any>=[
    {tipo:'Perro', nombre:'Lisa', edad:10},
    {tipo:'Gato', nombre:'Pepon', edad:2},
    {tipo:'Pato', nombre:'Lucas', edad:5},

  ]
}
