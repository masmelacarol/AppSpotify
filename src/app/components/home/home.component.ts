import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  cargando: boolean;
  error: boolean;
  mensajeError: string;


    constructor(private spotify: SpotifyService) {

      this.cargando = true;
      this.error = false;

      this.spotify.getNewRealeases().subscribe((data: any) => {
        //console.log(data);
        this.nuevasCanciones = data;
        this.cargando = false;
      }, ( errorServicio ) =>{
        this.cargando = false;
        this.error = errorServicio;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
      });
    }
}
