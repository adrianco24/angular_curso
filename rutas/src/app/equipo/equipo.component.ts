import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EquipoService} from './../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {

  equipox:any[] = [];

  constructor(
    private route:ActivatedRoute,
    private _servicio:EquipoService
    )
  {

this.route.params.subscribe(params=>{
    console.log(params['id'])
    this.equipox = this._servicio.obtenerUno(params['id'])
}
)
  }
}
