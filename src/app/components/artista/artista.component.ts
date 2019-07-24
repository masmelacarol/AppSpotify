import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html"
})
export class ArtistaComponent {
  
  artista: any = {};
  topTracks: any[] = []; 

  cargandoArtista: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.cargandoArtista = true;
    this.activatedRoute.params.subscribe(params => {
      // console.log(params.id);
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtista(id: string) {
    this.cargandoArtista = true;
    this.spotify.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.cargandoArtista = false;
    });
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks(id).subscribe( topTracks =>{
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
