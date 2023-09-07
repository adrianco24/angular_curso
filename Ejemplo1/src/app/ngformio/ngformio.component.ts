import { Component } from '@angular/core';

@Component({
  selector: 'app-ngformio',
  templateUrl: './ngformio.component.html',
  styleUrls: ['./ngformio.component.css']
})
export class NgformioComponent {
// creo un vector
cursos:string[]=["HTML","JAVA","CSS"];
animales:Array<any>=[
{tipo:"Perro",nombre:"Troy", edad:4},
{tipo:"Perro",nombre:"Suco", edad:5},
{tipo:"Gato",nombre:"kiki", edad:10}
]

}
