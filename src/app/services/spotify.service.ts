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
        "Bearer BQBSrqf72c6eS63qQzmT5_ZrydqOk27-7yRxax3inoQM8wVQz8C8ogu0d3JCyYmkSfdafn195TTuQKA9gO8"
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
