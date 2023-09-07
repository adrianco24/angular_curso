import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any=[
    {nombre:"Adrian",
    especialidad:"HTML",
    descipcion:"Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final"
   },
   {nombre:"Javier",
    especialidad:"CSC",
    descipcion:"Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final"
   },
   {nombre:"Marcela",
    especialidad:"SIU",
    descipcion:"Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final"
   }
  ]

constructor() {

    console.log('funcionando servicios')
   }

obtenerEquipo(){
  return this.equipo;

}

obtenerUno(i: string | number){
  return this.equipo[i];
}

}
