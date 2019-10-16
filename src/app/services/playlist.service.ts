import { Pagination } from '@app/models/pagination.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Playlist } from './../models/playlist.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PlaylistService {
  constructor(private http: HttpClient) {}

  getPlaylists(): Observable<Playlist[]> {
    return this.http
      .cache()
      .request<Pagination>('get', 'me/playlists')
      .pipe(map(res => res.items));
  }

  getPlaylistById(playlist_id: string) {
    return this.http.request<Playlist>('get', `playlists/${playlist_id}`).pipe(map(res => res));
  }
}
