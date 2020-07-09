import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    //console.log('Spotify ready!!!');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDcYw_7qNdHuDdRxKUF428ChAuU39EUA1qRPav2zIPNomLz1pqoHS9aA7ysYudxbVjmv8flOSDIlu-v2X0"
    });

    return this.http.get(url, { headers });
  }

  getNewRealeases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    //.pipe(map((data: any) => data.artists.items));
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data: any) => data.tracks));
  }
}
