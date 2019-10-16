import { Artist } from './artist.model';
import { Image } from './image.model';

export interface Album {
  album_group?: string;
  album_type: string;
  artists: Artist[];
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  type: string;
  uri: string;
}
