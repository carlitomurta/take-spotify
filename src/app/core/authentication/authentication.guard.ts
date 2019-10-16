import { SpotifyAuthResponse } from './../../models/auth-response.model';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { fromPairs } from 'lodash';
import { Logger } from '../logger.service';
import { CredentialsService } from './credentials.service';

const log = new Logger('AuthenticationGuard');

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private tokenSvc: CredentialsService) {}

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivateChild(next, state);
  }

  public canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const response = this.extractApiResponse(next.fragment);
    if (response) {
      log.debug('Authenticated');
      this.tokenSvc.setAuthToken(response);
      return true;
    } else {
      log.debug('Not authenticated, redirecting and adding redirect url...');
      this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
      return !!response;
    }
  }
  private extractApiResponse(fragment: string): SpotifyAuthResponse | null {
    if (!!fragment) {
      return fromPairs(fragment.split('&').map(s => s.split('='))) as SpotifyAuthResponse;
    }
    return null;
  }
}
