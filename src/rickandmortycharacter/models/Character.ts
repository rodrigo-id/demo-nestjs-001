import { Origin } from './Origin';

export class Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  episode: string[];
  url: string;
  created: string;
}
