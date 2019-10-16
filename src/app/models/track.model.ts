import { Album } from './album.model';
import { Artist } from './artist.model';

export interface Track {
  album: Album;
  artists: Artist[];
  disc_number: number;
  available_markets: Array<string>;
  duration_ms: string;
  explicit: boolean;
  id: string;
  is_playable: boolean;
  name: string;
  popularity: number;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
