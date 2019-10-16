import { Router } from '@angular/router';
import { AuthConfig } from './../models/auth-config.model';

import { environment } from '@env/environment';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Logger, AuthenticationService, CredentialsService } from '@app/core';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private authenticationService: AuthenticationService,
    private tokenSvc: CredentialsService,
    private router: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  public login(): void {
    const ac: AuthConfig = {
      client_id: environment.spotifyClientId,
      response_type: 'token',
      redirect_uri: encodeURIComponent(environment.redirect_uri),
      state: '',
      show_dialog: true,
      scope: [
        'user-read-private',
        'user-read-email',
        'user-library-read',
        'user-follow-read',
        'playlist-read-private',
        'playlist-read-collaborative'
      ]
    };
    this.authenticationService.configure(ac).authorize();
  }
}
