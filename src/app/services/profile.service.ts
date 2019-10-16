import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Profile } from '@app/models/profile.model';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http
      .cache()
      .request<Profile>('get', 'me')
      .pipe(map(res => res));
  }
}
