import { Image } from './image.model';
import { Profile } from './profile.model';
import { BaseTotalizer } from './base-totalizer';

export interface Playlist {
  collaborative: boolean;
  id: string;
  images: Image[];
  name: string;
  owner: Profile;
  public?: boolean;
  tracks: BaseTotalizer;
  type: string;
  uri: string;
}
