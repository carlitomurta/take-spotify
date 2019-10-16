import { PlaylistTrack } from './../models/playlist-track.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pagination } from '@app/models/pagination.model';

@Injectable()
export class TracksService {
  constructor(private http: HttpClient) {}

  getTracks(playlistId: string): Observable<PlaylistTrack[]> {
    return this.http.request<Pagination>('get', `playlists/${playlistId}/tracks`).pipe(map(res => res.items));
  }
}
