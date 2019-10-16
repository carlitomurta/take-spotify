import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from './../services/profile.service';
import { PlaylistService } from './../services/playlist.service';
import { TracksService } from './../services/tracks.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@app/shared';
import { TracksRoutingModule } from './tracks-routing.module';
import { TracksComponent } from './tracks.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule, SharedModule, TracksRoutingModule],
  declarations: [TracksComponent],
  providers: [TracksService, PlaylistService, ProfileService]
})
export class TracksModule {}
