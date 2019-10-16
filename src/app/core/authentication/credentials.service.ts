import { SpotifyAuthResponse } from './../../models/auth-response.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Credentials {
  // Customize received credentials here
  username: string;
  token: string;
}

const credentialsKey = 'credentials';

/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private token = '';
  private token$ = new BehaviorSubject(this.token);
  constructor() {}

  public get oAuthToken(): string {
    return this.token;
  }

  public clearToken(): void {
    this.token = '';
    this.token$.next(this.token);
  }

  public get authHeader(): { [name: string]: string } {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {};
  }

  public get authTokens(): Observable<string> {
    return this.token$.asObservable();
  }

  public setAuthToken(spotifyResponse: SpotifyAuthResponse): boolean {
    if (!!spotifyResponse && !!spotifyResponse.access_token) {
      this.token = spotifyResponse.access_token;
      localStorage.setItem('token', JSON.stringify(spotifyResponse));
    } else {
      this.token = '';
    }
    this.token$.next(this.token);
    return !!this.token;
  }
}
