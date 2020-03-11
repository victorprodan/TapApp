import _ from 'lodash';
import moment from 'moment';
import {Attractions, LocationPreview} from '../models';
import {theme} from '../theme';

const AttractionsPreview = [
  Attractions.camping,
  Attractions.exercises,
  Attractions.riding,
  Attractions.food,
  Attractions.wilderness,
];

const discoverDataModel: LocationPreview = {
  image: theme.images.venice,
  text: 'Great place for a picnic!',
  rating: 3.6,
  distance: 3,
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  attractions: AttractionsPreview,
  reviews: [
    {
      user: {avatar: theme.images.avatar, name: 'Victoria Banks'},
      rating: 4,
      comment:
        'Wow! I didn’t know that there is such a cool spot so close to my home town! 👍You guys need to see that!',
      likes: 2,
      timestamp: moment()
        .subtract(2, 'days')
        .toISOString(),
    },
    {
      user: {avatar: theme.images.avatar, name: 'Kathy Tucker'},
      rating: 5,
      comment:
        'Love this spot! I was there with my fiance and a dog once and it’s the best place to spend time not that far from the city.',
      likes: 81,
      timestamp: moment()
        .subtract(8, 'days')
        .toISOString(),
    },
    {
      user: {avatar: theme.images.avatar, name: 'Marco del Toro'},
      rating: 2,
      comment: 'Haters gonna hate. I hate it so much. DEAL WITH IT!!!!',
      likes: 0,
      timestamp: moment()
        .subtract(1, 'days')
        .toISOString(),
    },
  ],
};

export const DISCOVER_DATA = _.times(8, _.constant(discoverDataModel));
