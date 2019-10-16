import { ProfileService } from './../services/profile.service';
import { Track } from '@app/models/track.model';
import { TracksService } from './../services/tracks.service';
import { untilDestroyed } from '@app/core';
import { PlaylistService } from './../services/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Playlist } from '@app/models/playlist.model';
import { Profile } from '@app/models/profile.model';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit, OnDestroy {
  idPlaylist: string;
  playlist: Playlist;
  profile: Profile;
  tracks: Track[] = [];
  search: string;
  constructor(
    private playlistService: PlaylistService,
    private trackService: TracksService,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // tslint:disable-next-line: radix
    this.idPlaylist = this.route.snapshot.paramMap.get('id');
    this.getProfile();
    if (this.idPlaylist) {
      this.getPlaylist();
      this.getTracksById();
    }
  }

  ngOnDestroy() {}

  back() {
    this.router.navigate(['/profile'], { preserveFragment: true });
  }

  getProfile() {
    this.profileService
      .getProfile()
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.profile = res;
      });
  }

  getPlaylist() {
    this.playlistService
      .getPlaylistById(this.idPlaylist)
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.playlist = res;
      });
  }

  getTracksById() {
    this.trackService
      .getTracks(this.idPlaylist)
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        res.forEach(e => {
          // tslint:disable-next-line: radix
          e.track.duration_ms = this.msToMinutes(parseInt(e.track.duration_ms));
          this.tracks.push(e.track);
        });
      });
  }

  msToMinutes(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    // tslint:disable-next-line: radix
    return minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds;
  }
}
