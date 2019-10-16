import { PlaylistService } from '../services/playlist.service';
import { ProfileService } from '../services/profile.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@app/shared';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, ProfileRoutingModule],
  declarations: [ProfileComponent],
  providers: [ProfileService, PlaylistService]
})
export class ProfileModule {}
