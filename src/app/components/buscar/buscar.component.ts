import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent {
  artistas: any[] = [];

  cargando: boolean;
  constructor(private spotify: SpotifyService) {}

  buscar(termino: string) {
    console.log(termino);
    if (termino.length > 0) {
       this.cargando = true;
       console.log(termino);
       this.spotify.getArtistas(termino).subscribe((data: any) => {
         console.log(data);
         this.artistas = data;
         this.cargando = false;
       });
    } else {
      this.artistas = null;
    }
  }
}
