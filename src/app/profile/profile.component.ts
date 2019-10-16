import { Router } from '@angular/router';
import { PlaylistService } from '../services/playlist.service';
import { ProfileService } from '@app/services/profile.service';
import { Logger, untilDestroyed } from '@app/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Profile } from '@app/models/profile.model';
import { Playlist } from '@app/models/playlist.model';

const log = new Logger('Profile');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  profile: Profile;
  playlists: Playlist[] = [];
  constructor(private profileService: ProfileService, private playlistService: PlaylistService, private route: Router) {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit() {
    this.getProfile();
    this.getPlaylists();
  }
  ngOnDestroy() {}

  getProfile() {
    this.profileService
      .getProfile()
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.profile = res;
      });
  }

  getPlaylists() {
    this.playlistService
      .getPlaylists()
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.playlists = res;
      });
  }
}
