import {ImageSourcePropType} from 'react-native';
import {ImageSource} from 'react-native-vector-icons/Icon';

export enum Attractions {
  camping = 'camping',
  food = 'food',
  riding = 'riding',
  wilderness = 'wilderness',
  exercises = 'exercises',
}

interface User {
  avatar: ImageSourcePropType;
  name: string;
}

export interface Review {
  user: User;
  rating: number;
  comment: string;
  likes: number;
  timestamp: string;
}

export interface IUserAllowedToLogin {
  userName: string;
  password: string;
}

export interface IRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface LocationPreview {
  image: ImageSource;
  text: string;
  rating: number;
  distance: number;
  region: IRegion;
  attractions: Attractions[];
  reviews: Review[];
}
