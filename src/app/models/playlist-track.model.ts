import { Profile } from './profile.model';
import { Track } from './track.model';

export interface PlaylistTrack {
  added_at: Date;
  added_by: Profile;
  is_local: boolean;
  track: Track;
}
