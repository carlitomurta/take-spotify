import { environment } from '@env/environment';
import { Logger } from '@app/core/logger.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { AuthConfig } from '@app/models/auth-config.model';

const log = new Logger('AuthenticationService');

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private requestAuthUrl = environment.authUrl;
  private authorized$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private authConfig: AuthConfig = {
    client_id: '',
    response_type: 'token',
    redirect_uri: '',
    state: '',
    show_dialog: true,
    scope: []
  };
  constructor() {}

  public authorize() {
    window.location.href = this.buildAuthUrl();
  }
  public authorized(): void {
    console.log('Called auth');
    this.authorized$.next(true);
  }

  public get authorizedStream(): Observable<boolean> {
    return this.authorized$.asObservable();
  }

  public configure(config: AuthConfig): AuthenticationService {
    // Validate Config
    this.authConfig = config;
    return this;
  }
  private buildAuthUrl(): string {
    const params = [];
    for (const [key, value] of Object.entries(this.authConfig)) {
      if (typeof value === 'object') {
        params.push(`${key}=${(value as string[]).join(' ')}`);
      } else {
        params.push(`${key}=${value}`);
      }
    }

    return `${this.requestAuthUrl}?${params.join('&')}`;
  }
}
