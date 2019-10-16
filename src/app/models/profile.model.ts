import { Image } from './image.model';
import { BaseTotalizer } from './base-totalizer';

export interface Profile {
  display_name: string;
  email: string;
  followers: BaseTotalizer;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}
