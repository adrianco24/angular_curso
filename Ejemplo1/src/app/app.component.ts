import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  show:boolean=true;
  activo:string='';
  cursos:string[]=['html','ANGULAR','PHP'];
  title = 'Ejemplo1';
}
